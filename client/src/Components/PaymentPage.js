import React, { useState } from "react";
import paymentHandler from "../pages/Home/one-to-one/OnePayment";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Alert } from "flowbite-react";
import { Input } from "antd";

function PaymentPage() {
  const [amount, setAmount] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePaymentClick = (event) => {
    event.preventDefault();
    if (amount && !isNaN(amount)) {
      paymentHandler(amount * 100);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <>
      <Header />
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto h-full z-50">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-8 py-12 sm:py-20 lg:max-w-7xl">
          <div className="bg-white">
            <div>
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Complete Your Purchase
                </h2>
                {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                  Master your oratory skills with our transformational course,
                  designed to equip you with the confidence and techniques to
                  speak effectively in any situation.
                </p> */}
              </div>
              <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none shadow-custom-orange flex flex-col-reverse sm:flex-row">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Membership Benefits
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    Gain exclusive access to comprehensive resources to elevate your public
                    speaking journey.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-orange-500">
                      What’s Included
                    </h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-orange-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Tailored sessions to improve your communication skills.
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-orange-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Access to premium materials for continuous learning.
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-orange-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Connect with industry experts and peers.
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-orange-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Earn recognition for your achievements.
                    </li>
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-white sm:bg-gray-50 py-10 text-center ring-1 ring-inset ring-white sm:ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8 flex flex-col gap-3">
                      <p className="text-base font-semibold text-gray-600">
                        Pay once, own it forever
                      </p>
                     

                      <Input
                        type="text"
                        value={amount}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        className="mr-2 p-1 border rounded"
                      />
                      <button
                        onClick={handlePaymentClick}
                        className="inline-block w-auto text-center px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-gradient-to-b dark:shadow-orange-900 shadow-orange-200 hover:shadow-2xl hover:shadow-orange-400 hover:-tranneutral-y-px"
                      >
                        Proceed to Payment
                      </button>
                      {showAlert && (
                        <Alert color="failure">
                          <span className="font-medium"></span> Please enter a
                          valid number.
                        </Alert>
                      )}
                      <p className="sm:mt-6 text-xs leading-5 text-gray-600">
                       
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PaymentPage;
