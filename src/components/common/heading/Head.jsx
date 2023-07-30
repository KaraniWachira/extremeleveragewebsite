import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>Extreme Leverage</h1>
            <span> delivering on time</span>
          </div>

          <div className="social icon">
            <FaFacebook />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Head;
