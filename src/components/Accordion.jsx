import { useState } from "react"

const Accordion = ({title,content}) => {
    const [isOpen,setIsOpen] = useState(true)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <div className="accordion">
                 <div className="accordion-header" onClick={toggleAccordion}>
                    {title}
                </div>
                {isOpen && (
                <div className="accordion-content">
                {content}
            </div>
      )}
    </div>
        </>
    )
}
export default Accordion