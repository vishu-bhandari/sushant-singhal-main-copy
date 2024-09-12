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

const { TabPane } = Tabs;

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
            <TabPane tab="About" key="1">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Product" key="2">
              <AdminProjects />
            </TabPane>
            <TabPane tab="Slider" key="3">
              <AdminSlider />
            </TabPane>
            <TabPane tab="Blog" key="4">
              <AdminBlog />
            </TabPane>
            <TabPane tab="Gallery" key="5">
              <AdminGallery />
            </TabPane>
            <TabPane tab="Faq" key="6">
              <AdminFaq />
            </TabPane>
            <TabPane tab="Testimonial" key="7">
              <AdminTestimonial />
            </TabPane>
            <TabPane tab="AboutMe" key="8">
              <AdminAboutme />
            </TabPane>
            <TabPane tab="Contact" key="9">
             <AdminContact/>
            </TabPane>
            
          </Tabs>
          
        </div>
      )}
    </>
  );
}

export default Admin;
