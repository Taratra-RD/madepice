import { useState, useEffect } from "react";
import chevron from "../image/autres/icons/chevron-1.png";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [rotate, setRotate] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setClicked(true);
  };

  const Rotation = () => {
    setRotate(!rotate);
  };

  useEffect(() => {
    if (clicked) {
      const animationTimeout = setTimeout(() => {
        setClicked(false);
      }, 800); // Duration of the animation in milliseconds

      return () => clearTimeout(animationTimeout);
    }
  }, [clicked]);

  return (
    <>
      <div className={`accordion ${clicked ? "clicked" : ""}`}>
        <div
          className="accordion-header"
          onClick={() => {
            toggleAccordion();
            Rotation();
          }}
        >
          <p>{title}</p>
          <div className="div--chevron">
            <img
              className={`chevron ${rotate ? "rotate" : ""}`}
              src={chevron}
              alt=""
            />
          </div>
        </div>
        <div
          className={`${
            isOpen ? "accordion-content" : "accordion-content-none"
          }`}
        >
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
