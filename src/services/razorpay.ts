import avanaCourtyardImg from '../assets/images/venue_avana_courtyard_1795445477732.jpg';

export interface PaymentDetails {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  guestCount: string;
  city: string;
  preferredStyle: string;
  servicesNeeded?: string[];
}

export interface PaymentSuccessResult {
  paymentId: string;
  orderId?: string;
  signature?: string;
  details: PaymentDetails;
  timestamp: string;
  amount: number;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initiateRazorpayPayment = async (
  details: PaymentDetails,
  onSuccess: (result: PaymentSuccessResult) => void,
  onFailure: (errorMsg: string) => void
) => {
  const isLoaded = await loadRazorpayScript();

  const testKey = 'rzp_test_1DP5mmOlF5G5ag'; // Standard Razorpay public test key for seamless checkout demos

  if (!isLoaded || !window.Razorpay) {
    onFailure('Razorpay SDK failed to load. Please check your internet connection.');
    return;
  }

  const options = {
    key: testKey,
    amount: 299900, // ₹2,999 in paise
    currency: 'INR',
    name: 'Alayam Weddings',
    description: 'Venue Curation Onboarding (100% Refundable)',
    image: avanaCourtyardImg,
    prefill: {
      name: details.name,
      email: details.email,
      contact: details.phone
    },
    notes: {
      wedding_date: details.weddingDate || 'Flexible',
      guest_count: details.guestCount || '250-300',
      city: details.city || 'Bangalore',
      style: details.preferredStyle || 'Heritage Courtyard',
      services_requested: details.servicesNeeded?.length
        ? details.servicesNeeded.join(', ')
        : 'Full Turnkey Event Management',
      refund_policy: '100% Refundable on Venue Booking'
    },
    theme: {
      color: '#B89552'
    },
    handler: function (response: any) {
      const result: PaymentSuccessResult = {
        paymentId: response.razorpay_payment_id || `pay_${Math.random().toString(36).substring(2, 11)}`,
        orderId: response.razorpay_order_id,
        signature: response.razorpay_signature,
        details,
        timestamp: new Date().toISOString(),
        amount: 2999
      };
      onSuccess(result);
    },
    modal: {
      ondismiss: function () {
        console.log('Razorpay payment modal closed by user');
      }
    }
  };

  try {
    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (resp: any) {
      onFailure(resp.error?.description || 'Payment was unsuccessful.');
    });
    rzp.open();
  } catch (err: any) {
    console.error('Error opening Razorpay modal:', err);
    onFailure('Unable to launch Razorpay checkout modal.');
  }
};
