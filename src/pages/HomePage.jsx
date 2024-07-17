import React from "react";
import Header from '../component/Header'
// import Footer from '../component/Footer'
import Home from './Home'

const HomePage = () => {
  return (
    <>
      <div className="hero-section">
        <Header />
        {/* <div style={{marginTop: "0vh",}}>
          <Home />
        </div>
        <Footer /> */}
      </div>
      <Home />

    </>
  );
};

export default HomePage;
