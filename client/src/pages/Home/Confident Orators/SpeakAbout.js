import React from "react";

function SpeakAbout() {
  
  const sections = [
    {
      heading: "1. Overcoming Stage Fright ",
      items: [
        "Ice Breakers: Activities to build comfort and ease.",
        "Course Guide: Navigate and maximize your learning.",
        "Speaking Anxiety: Identify and manage fears.",
        "Fear Management: Strategies to overcome anxiety.",
        "Speaker Mindset: Develop confidence for effective speaking."
      ]
    },
    {
      heading: "2. Speaking with Conviction & Clarity",
      items: [
        "Vocal Techniques: Master Pitch, Pace, Pause, and Volume.",
        "Effective Speaking: Principles for impactful delivery.",
        "Communication Barriers: Address unclear speech and nervousness."
      ]
    },
    {
      heading: "3. Projecting Confidence & Poise",
      items: [
        "Champion Speeches: Learn from award-winning talks.",
        "Hand Gestures: Enhance delivery with gestures.",
        "Stage Movement: Move confidently on stage.",
        "Eye Contact: Maintain engaging and impactful eye contact."
      ]
    },
    {
      heading: "4. Structuring Clear & Simple Messages",
      items: [
        "Speech Structure: Proven methods for clear organization.",
        "Pitch Insights: Use real-world examples to craft compelling content.",
        "Openings & Closings: Create memorable introductions and conclusions."
      ]
    },
    {
      heading: "5. Speaking Confidently on Any Topic",
      items: [
        "Speaking Framework: Structure your thoughts on any subject.",
        "Nervousness Tips: Practical advice to overcome stage fright."
      ]
    },
    {
      heading: "6. Storytelling for EmotionalConnection",
      items: [
        "Role of Storytelling: Importance in engaging speeches.",
        "Crafting Stories: Framework for compelling storytelling.",
        "Memorable Stories: Techniques to make stories impactful.",
        "Practice: Refine storytelling in various contexts.",
        "Data Storytelling: Present data persuasively."
      ]
    },
    {
      heading: "7. Keeping Your Audience Engaged",
      items: [
        "Engagement Tips: Strategies to captivate your audience.",
        "Avoiding Monotony: Techniques to keep speeches dynamic."
      ]
    },
    {
      heading: "8. Influencing Your Audience",
      items: [
        "Influence Techniques: Effective methods to persuade.",
        "Speech Analysis: Learn from influential speeches.",
        "Practice Influence: Apply techniques in diverse scenarios."
      ]
    },
    {
      heading: "9. Connecting with Your Audience",
      items: [
        "Mind Mapping: Organize content efficiently.",
        "Audience Connection: Build strong rapport with listeners.",
        "Tailoring Speeches: Adapt content for different audiences."
      ]
    },
    {
      heading: "10. Public Speaking Challenges",
      items: [
        "Overcoming Challenges: Tactics for common obstacles.",
        "Self-Practice: Techniques for continuous improvement."
      ]
    }
  ];
  

  // Split sections into two halves for balanced columns
  const midIndex = Math.ceil(sections.length / 2);
  const firstHalf = sections.slice(0, midIndex);
  const secondHalf = sections.slice(midIndex);

  return (
    <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl mx-auto h-full">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:px-8 lg:max-w-7xl ">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Left Column */}
        <div className="space-y-8 lg:space-y-0 lg:col-span-1">
          {firstHalf.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <div className="space-y-2 mt-5">
                <span className={`rounded-full sm:uppercase   px-3 py-0.5 sm:text-lg text-sm font-semibold leading-5 text-white ${sectionIndex % 2 === 0 ? 'bg-teal-700' : 'bg-orange-700'}`}>
                  {section.heading}
                </span>
              </div>
              <p className="text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
                <ul className="flex sm:gap-5 gap-0  flex-col">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start sm:mt-5 mt-2 lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="ml-3 leading-5 text-gray-600">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
        {/* Right Column */}
        <div className="space-y-8 lg:space-y-0 lg:col-span-1">
          {secondHalf.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <div className="space-y-2 mt-5">
                <span className={`rounded-full sm:uppercase   px-3 py-0.5 sm:text-lg text-sm font-semibold leading-5 text-white ${sectionIndex % 2 === 0 ? 'bg-teal-700' : 'bg-orange-700'}`}>
                  {section.heading}
                </span>
              </div>
              <p className="text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
                <ul className="flex sm:gap-5 gap-0 flex-col">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start sm:mt-5 mt-2 lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="ml-3 leading-5 text-gray-600">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default SpeakAbout;
