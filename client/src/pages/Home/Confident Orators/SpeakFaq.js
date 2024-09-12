import React from "react";

function SpeakFaq() {
  const faqs = [
    {
      question:
        "What can I expect to improve from the Public Speaking Course: Confident Orators?",
      answer:
        `You can expect the following:\n- Overcoming Stage Anxiety\n- Speaking with Impact with strong nonverbal communication like pitch, tone, hand gestures, facial expressions, etc.\n- Making Content Interesting with Storytelling\n- The Art of Speaking with Influence\n- Techniques to make Content Interesting, etc.\nClick on the <a href="/confident-orators" className="text-blue-500 underline">Confident Orators page</a> to know more!`,
    },
    {
      question:
        "Will the Public Speaking Course cover both preparation and delivery aspects?",
      answer: "Yes. It will cover both",
    },
    {
      question:
        "Will specific techniques be taught to manage speaking anxiety?",
      answer: "Yes. Specific techniques will be taught",
    },
    {
      question: "What is the typical batch size of the course?",
      answer:
        "We carry a small batch size so that individual attention can be ensured. You may expect 15-20 participants",
    },
    {
      question: "Who all should attend this course?",
      answer:
        "This course is for Students/ working professionals/ freelancer / CEOs / Startup Founders/housewives or anyone who aspires to conquer their Speaking fears and upskilling their communication and Public Speaking game.",
    },
    {
      question: "Will there be a certificate provided on course completion?",
      answer:
        "Yes. We do certify all active participants after course completion",
    },
    {
      question: "Is the course suitable for beginners?",
      answer:
        "Yes. One does not need any prior knowledge or experience to attend this course",
    },
    {
      question: "How many sessions and what will the duration of the course?",
      answer:
        "There will be 10 Live Online sessions of 2 hrs each. Sessions will be on 10 consecutive days. Fill the form on the Contact Us page and we will connect with you regarding next batch details",
    },
    {
      question:
        "How will this course help me in my Personal and Professional life?",
      answer:
        "This course will sharpen the way you interact with others. Professionally, it will help deliver better presentations, get chances to host events, network, improve your persuasive skills, etc. which can multiply your chances of promotion / give better results in your venture.",
    },
    {
      question:
        "What is the coach’s experience and qualification in the field?",
      answer:
        "Coach Sushant Singhal has 6+ years of enriching experience with Public Speaking. He has delivered 100+ Speeches and mentored 500+ participants in the journey so far!",
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
                      <p
                        className="group-open:animate-fadeIn mt-3 text-neutral-600 whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
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

export default SpeakFaq;
