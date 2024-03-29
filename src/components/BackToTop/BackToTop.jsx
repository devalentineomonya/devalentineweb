import React, { useEffect, useState } from "react";
import chevronUp from "../../assets/images/chevronup.png";
import "./backtotop.css";

const backToTopHandler = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const BackToTop = () => {
  const [iScrolled, setIscrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setIscrolled(true);
      } else {
        setIscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${iScrolled ? "hidden" : ""}`} onClick={backToTopHandler}>
      <div className="back-to-top-icon">
        <img src={chevronUp} alt="" />
      </div>
    </div>
  );
};

export default BackToTop;
