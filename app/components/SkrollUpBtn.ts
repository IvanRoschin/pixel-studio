import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollPos = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.pageYOffset;

      // Button is displayed after scrolling for 500 pixels
      if (currentScrollPos > 500 && currentScrollPos > prevScrollPos.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="top" onClick={scrollToTop}>
          <div className="top_img_holder">
            <Image src="/uparrow.png" width="16" height="12" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
