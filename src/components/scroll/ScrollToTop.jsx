import React, { useState, useEffect } from "react";
import {AiOutlineArrowUp} from 'react-icons/ai'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
     <AiOutlineArrowUp color="white" size={25}/>
    </button>
  );
};

export default ScrollToTop;
