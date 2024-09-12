import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import AboutPage from "./pages/Home/AboutPage"; 
import ServicePage from "./pages/Home/ServicePage";
import axios from 'axios';
import { useDispatch} from "react-redux";
import { SetPortfolioData } from "./redux/rootSlice";
import GallaryPage from "./pages/Home/GallaryPage";
import BlogPage from "./pages/Home/BlogPage";
import ContactPage from "./pages/Home/ContactPage";
import Admin from "./pages/Admin/Admin";
import Onetoone from "./pages/Home/Onetoone";
import Speaktosucceed from './pages/Home/Confident Orators/Speaktosucceed';
import Eloquence from "./pages/Home/Eloquence/Eloquence";
import PaymentPage from "./Components/PaymentPage";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./pages/Admin/Login";
import WhatsApp from "./Components/WhatsApp";

const BASE_URL = process.env.REACT_APP_BASE_URL ;


function App() {
  // const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/portfolio/get-portfolio-data`);
      // const response=await axios.get('http://localhost:8000/api/portfolio/get-portfolio-data')
      dispatch(SetPortfolioData(response.data));
    } catch (error) {
      
      console.error("Error fetching portfolio data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    getPortfolioData();
  }, [getPortfolioData]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <WhatsApp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/AdminLogin' element={<Login />} />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/service" element={<ServicePage />} />
          <Route path="/gallary" element={<GallaryPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/EmpowerYou" element={<Onetoone />} />
          <Route path="/confident-orators" element={<Speaktosucceed />} />
          <Route path="/Eloquence" element={<Eloquence />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
