import React from "react";
import CTA from "./cta";
import HeaderSocials from "./headerSocials";
import me from "../../assets/me.jpg";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_background">
        <div className="container header_container">
          <h5> Welcome, I'm </h5>
          <h1>Crystal Yal</h1>
          <h5 className="text-light">Software Engineer</h5>
          <HeaderSocials />
          <CTA />
          <div className="me">
            <img src={me} />
          </div>
          <a href="#contact" className="scroll-btn scroll_down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
