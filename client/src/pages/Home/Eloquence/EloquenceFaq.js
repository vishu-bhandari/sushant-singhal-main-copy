import React from 'react'

function EloquenceFaq() {
  const faqs = [
    {
      question: "Will there be any interaction with Coach Sushant Singhal in this group?",
      answer: "Coach Sushant will be part of all major discussions. You can ask any questions in the group.",
    },
    {
      question: "How many members are currently in the group?",
      answer: "There are currently around 70 participants in the group.",
    },
    {
      question: "Are there any community rules I should be aware of?",
      answer: "Yes, to ensure a positive and productive space, please adhere to the following rules:\n1. No discussions on politics, religion, or caste.\n2. No self-promotion.\n3. Use respectful language—avoid derogatory or unparliamentary remarks.",
    },
    {
      question: "On which social media platform does the community operate?",
      answer: "Currently, we are active on WhatsApp. Members will be informed if we create a Facebook group or use other social media platforms.",
    },
  ];
  
  
  return (
    <>
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto h-full z-50 sm:mb-20 mb-5">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-8 lg:max-w-7xl">
          <div className="relative w-full bg-white   ">
            <div className="">
              <div className="flex flex-col items-center ">
                <h2 className=" text-center text-3xl font-bold tracking-tight md:text-5xl">
                  FAQ
                </h2>
                <p className="sm:mt-3 mt-1 text-lg text-neutral-500 md:text-xl">
                  Frequently asked questions
                </p>
              </div>
              <div className="mx-auto mt-8 grid sm:max-w-2xl 2xl:max-w-7xl divide-y divide-neutral-200">
                {faqs.map((faq, index) => (
                  <div className="py-5" key={index}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600 whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EloquenceFaq