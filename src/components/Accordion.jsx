import { useState } from "react"

const Accordion = ({title,content}) => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <div className="accordion">
                 <div className="accordion-header" onClick={toggleAccordion}>
                    <p>{title}</p>
                </div>
                {isOpen && (
                    <div className="accordion-content">
                        <p>{content}</p>
                    </div>
                )}
            </div>
        </>
    )
}
export default Accordion