const BASE_URL = process.env.REACT_APP_BASE_URL ;
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;

const paymentHandler = async (amount) => {
  const currency = "INR";
  const receiptId = '1234567890';
  
  try {
    const response = await fetch(`${BASE_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Order creation failed with status: ${response.status}`);
    }

    const order = await response.json();
    console.log('Order:', order);

    const options = {
      key: RAZORPAY_KEY_ID, 
      amount: order.amount.toString(), 
      currency: order.currency,
      name: "One to One",
      description: "TEST TRANSACTION",
      image: "", 
      order_id: order.id,
      handler: async function (response) {
        const body = { ...response };

        try {
          const validateResponse = await fetch(`${BASE_URL}/validate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });

          if (!validateResponse.ok) {
            throw new Error(`Validation failed with status: ${validateResponse.status}`);
          }

          const jsonResponse = await validateResponse.json();
          console.log('Validation Response:', jsonResponse);
        } catch (error) {
          console.error('Validation Error:', error);
         
        }
      },
      prefill: {
        name: "vishu",
        email: "deevishu1234@gmail.com",
        contact: "8587003916",
      },
      notes: {
        address: "Razorpay Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      console.error('Payment Failed:', response);
      alert(`Payment failed: ${response.error.description}`);
    });

    rzp1.open();
  } catch (error) {
    console.error('Payment Initialization Error:', error);
    alert('Payment initialization failed. Please try again.');
  }
};

export default paymentHandler;
