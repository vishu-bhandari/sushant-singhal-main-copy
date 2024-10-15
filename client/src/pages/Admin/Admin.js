import React, { useEffect } from "react";
import Header from "../../Components/Header";
import { Tabs } from "antd";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminProjects from "./AdminProjects";
import AdminSlider from "./AdminSlider";
import AdminBlog from "./AdminBlog";
import AdminGallery from "./AdminGallery";
import AdminFaq from "./AdminFaq";
import AdminTestimonial from "./AdminTestimonial";
import AdminAboutme from "./AdminAboutme";
import AdminContact from "./AdminContact";
import AdminPrivacy from "./AdminPrivacy";




function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/AdminLogin";
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/AdminLogin";
  };

  return (
    <>
      <Header />
      <div className="px-5 max-w-7xl mx-auto flex justify-end">
        <button
          onClick={handleLogOut}
          className="border border-gray-500 bg-primary text-white p-2 rounded-md shadow-md"
        >
          Log Out
        </button>
      </div>

      {portfolioData && (
        
        <div className="p-5 max-w-7xl mx-auto ">
          <Tabs defaultActiveKey="1">
            <items tab="About" key="1">
              <AdminAbout />
            </items>
            <items tab="Product" key="2">
              <AdminProjects />
            </items>
            <items tab="Slider" key="3">
              <AdminSlider />
            </items>
            <items tab="Blog" key="4">
              <AdminBlog />
            </items>
            <items tab="Gallery" key="5">
              <AdminGallery />
            </items>
            <items tab="Faq" key="6">
              <AdminFaq />
            </items>
            <items tab="Testimonial" key="7">
              <AdminTestimonial />
            </items>
            <items tab="AboutMe" key="8">
              <AdminAboutme />
            </items>
            <items tab="Contact" key="9">
             <AdminContact/>
            </items>
            <items tab="Privacy" key="10">
              <AdminPrivacy />
            </items>
           
            
          </Tabs>
          
        </div>
      )}
    </>
  );
}

export default Admin;
