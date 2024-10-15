import React from 'react';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import { useSelector } from 'react-redux';

export default function LegalTerms() {
  const { portfolioData } = useSelector((state) => state.root);

  // Check if the data is available; if not, render a loading state
  if (!portfolioData || !portfolioData.privacyPolicies) {
    return <div>Loading...</div>; // Show a loading indicator while the data is being fetched
  }

  const { privacyPolicies } = portfolioData; // Destructure privacyPolicies from the portfolioData

  // Log the length of privacyPolicies
  console.log('Total Privacy Policies:', privacyPolicies.length);

  // Slice the privacyPolicies array
  const privacyPolicyItems = privacyPolicies.slice(0, 6); // First 6 items (Privacy Policies)
  const termsOfUseItems = privacyPolicies.slice(6); // Next items (Terms of Use)

  // Log terms of use items to check their contents
  console.log('Terms of Use Items:', termsOfUseItems);

  return (
    <>
      <Header />
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto border-t border-gray-100 rounded-xl z-10 mb-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center lg:max-w-7xl">
          <div className="bg-white w-full">
            <img 
              src="https://i.postimg.cc/pLtTRNvT/privacy-policy-personal-data-protection-business-concept-vector.jpg" 
              alt="Privacy Policy" 
              className="w-full h-64 lg:h-96 object-contain" 
              loading="lazy" 
            />
          </div>
          <div className="bg-white">
            {/* Privacy Policy Section */}
            <div className="container mx-auto py-8">
              <div className="mb-4">
                <h1 className="text-5xl font-bold">Privacy Policy</h1>
                <hr className="border-2 w-1/4 border-secondary opacity" />
                <hr className="border-2 w-1/5 border-tertiary opacity mt-0.5" />
                <hr className="border-2 w-1/6 border-primary opacity mt-0.5" />
              </div>
              {privacyPolicyItems.map((item, index) => (
                <div key={item._id}>
                  <h2 className="text-2xl font-semibold mb-2">{item.subheading}</h2>
                  <p className="mb-4">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white">
            {/* Terms of Use Section */}
            <div className="container mx-auto py-8">
              <div className="mb-4">
                <h1 className="text-5xl font-bold">Terms of Use</h1>
                <hr className="border-2 w-1/4 border-secondary opacity" />
                <hr className="border-2 w-1/5 border-tertiary opacity mt-0.5" />
                <hr className="border-2 w-1/6 border-primary opacity mt-0.5" />
              </div>
              {termsOfUseItems.map((item, index) => (
                <div key={item._id}>
                  <h2 className="text-2xl font-semibold mb-2">{item.subheading}</h2>
                  <p className="mb-4">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
