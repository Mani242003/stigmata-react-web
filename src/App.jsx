import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.scss";
// import {useSelector,useDispatch} from "react-redux"
// import { decrement, increment } from './redux/reducer/counterSlices'

import AOS from "aos";
import "aos/dist/aos.css";
import CookieConsent from "react-cookie-consent";
// import Navbar from './component/navbar/Navbar'
// import About from "./pages/about/About";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import GoToTop from "./component/GoToTop/GoToTop";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import ScrollToTop1 from "./component/ScrollToTop/ScrollToTop";

// Lazy load components
const Home = lazy(() => import("./pages/home/home"));
const Services = lazy(() => import("./pages/services/Services"));
const Blog = lazy(() => import("./pages/blog/blog"));
const Contact = lazy(() => import("./pages/contact/contact"));
const DevOps = lazy(() => import("./pages/services/devops/DevOps"));
const MobileDevPage = lazy(() => import("./pages/services/mobileDevPage/MobileDevPage"));
const AIPage = lazy(() => import("./pages/services/AI/AIPage"));
const PageNotFound = lazy(() => import("./pages/pageNotFound/PageNotFound"));
const Plugin = lazy(() => import("./pages/services/plugin/Plugin"));
const SoftwarePage = lazy(() => import("./pages/services/SoftwarePage/SoftwarePage"));
const CloudMigrate = lazy(() => import("./pages/services/cloudMigrate/CloudMigrate"));
const ServerLess = lazy(() => import("./pages/services/serverLess/ServerLess"));
const About = lazy(() => import("./pages/about/About"));
const Career = lazy(() => import("./pages/Career/Career"));
const ManiAPI = lazy(() => import("./ManiAPI"));
const Policy = lazy(() => import("./pages/Policy/Policy"));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <Router>
     
        <ScrollToTop smooth />
      

      {/* <ManiAPI /> */}
      {/* <div
        className="scroll-to-top-container"
        style={{ position: "fixed", left: "0", bottom: "20px", zIndex: "1000" }}
      >
      </div> */}

      {/* <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="myAwesomeCookieName2"
        style={{
          background: "#1A74E9",
          width: "75%",
          borderRadius: "5px",
          margin: "10px",
        }}
        buttonStyle={{
          color: "white",
          background: "#1A74E9",
          border: "1px solid white",
          fontSize: "15px",
          padding: "8px 13px",
          borderRadius: "5px",
          fontWeight: "500",
          marginRight: "3rem",
        }}
        expires={150}
      >
        <span
          style={{
            color: "white",
          }}
        >
          {" "}
          We use cookies to deliver the best user experience. By using our
          website, you agree to our{" "}
          <Link style={{ color: "white" }} to="/cookie-policy">
            cookie policy
          </Link>
          .
        </span>
      </CookieConsent> */}

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/mobile-app-development" element={<MobileDevPage />} />

          <Route path="/dev-Ops" element={<ServerLess />} />
          <Route path="/cloud-migration" element={<CloudMigrate />} />
          <Route path="/serverless-computing" element={<DevOps />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/plugin-development" element={<Plugin />} />

          <Route path="/artificial-intelligence" element={<AIPage />} />
          <Route path="/software-development" element={<SoftwarePage />} />
          <Route path="/software-development" element={<SoftwarePage />} />

          <Route path="/careers" element={<Career />} />
          <Route path="/cookie-policy" element={<Policy />} />

          

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
     </Router>
  );
};

export default App;
