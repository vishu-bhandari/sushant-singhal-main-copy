import React from 'react'

function EmpowerFaq() {
    const faqs = [
        {
          question: "What can I expect from Empower You: One to One Coaching Programme?",
          answer: "This is a Personalized coaching Programme where the course content, number of sessions & duration of each session will be customised depending on your learning requirements with the purpose of 'Empower You'",
        },
        {
          question: "How will this Programme be Structured?",
          answer: "As the first step, we will get on a free-of-cost discovery call to find your learning requirements and assess how we can contribute. After 1-2 working days of the call, you can expect a customised curriculum with a quotation. Once the dues are settled, we will get on an orientation call to discuss your journey, timings and duration.",
        },
        {
          question: "Can the schedule be adjusted as per my needs?",
          answer: "If you have any specific time preference, please clarify during the discovery call. We can discuss further proceedings accordingly",
        },
        {
          question: "Will there be any support provided after the programme ends?",
          answer: "All the participants of our one-to-one Coaching Programme and Public Speaking Course are our tribe members and we will stay in touch in our community group.",
        },
        {
          question: "What is the coach’s experience and qualification in the field?",
          answer: "Coach Sushant Singhal has 6+ years of enriching experience with Public Speaking. He has delivered 100+ Speeches and mentored 500+ participants in the journey so far!",
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

export default EmpowerFaq