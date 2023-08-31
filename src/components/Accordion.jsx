import { useState, useEffect } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
        setClicked(true);
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
                <div className="accordion-header" onClick={toggleAccordion}>
                    <p>{title}</p>
                </div>
                <div className={`${isOpen ? "accordion-content" : "accordion-content-none"}`}>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
};

export default Accordion;
