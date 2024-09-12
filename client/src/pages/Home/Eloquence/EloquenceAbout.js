import React from 'react'

function EloquenceAbout() {
    const sections = [
        {
          heading: "1. Live Educational Sessions",
          items: [
            "Voice Impact: Captivate with your voice.",
            "Avoiding Monotony: Develop engaging storytelling.",
            "Effective Speech: Connect logically and emotionally.",
            "Overcoming Nervousness: Build confidence and fluency.",
          ]
        },
        {
          heading: "2. Charismatic Confidence",
          items: [
            "Secrets of Charismatic Confidence: Uncover powerful speaking techniques.",
            "Overcoming Fear: Conquer your fear of public speaking.",
            "Engaging Delivery: Master the art of engaging your audience."
          ]
        },
        {
          heading: "3. Busting Myths",
          items: [
            "Common Misconceptions: Break free from public speaking myths.",
            "Confidence Building: Develop a strong speaker mindset.",
            "Speaking Anxiety: Manage and overcome fears."
          ]
        },
        {
          heading: "4. Visual Aid Mastery",
          items: [
            "Effective Use: Discover the art of using visual aids.",
            "Enhance Delivery: Use visuals to support your message.",
            "Audience Engagement: Keep your audience captivated with visual aids."
          ]
        },
        {
          heading: "5. Smooth Transitions",
          items: [
            "Seamless Transitions: Navigate smoothly in your speeches.",
            "Flow Techniques: Maintain a logical flow in your content.",
            "Engaging Storytelling: Use transitions to enhance storytelling."
          ]
        },
        {
          heading: "6. Art and Science of Persuasion",
          items: [
            "Balancing Emotion and Logic: Deliver persuasive speeches.",
            "Influence Methods: Persuade effectively.",
            "Speech Analysis: Learn from influential talks."
          ]
        },
        {
          heading: "7. Improv Games",
          items: [
            "Spontaneity: Enhance quick thinking with unscripted exercises.",
            "Talking in Questions: Practice engaging in questions.",
            "Swapping Characters: Develop flexibility in speaking."
          ]
        },
        {
          heading: "8. Impromptu Speech Practice",
          items: [
            "Off the Cuff: Practice different types of impromptu topics.",
            "Abstract Topics: Develop skills for abstract subjects.",
            "Crooked Topics: Handle challenging impromptu topics."
          ]
        },
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
                            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
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
                            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
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

export default EloquenceAbout