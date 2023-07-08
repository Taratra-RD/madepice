import { useState } from "react"
import { Link } from "react-router-dom"
import "./css/ProductContent.css"
export default function ProductContent() {
    const [changePicture, setChangePicture] = useState(true)

    const firstPx = (
        <div className="productContent--image-block--first" ></div>
    )

    const secondPx = (
        <div className="productContent--image-block" >
            <Link to="/vanille" className="productContent--image-item i1"></Link>
            <Link to="/cafe" className="productContent--image-item i2"></Link>
            <Link to="/girofle" className="productContent--image-item i3"></Link>
            <Link to="/canelle" className="productContent--image-item i4"></Link>
            <Link to="poivre" className="productContent--image-item i5"></Link>
        </div>
    )

    const handleOnmouseHover = () => {
        setChangePicture((prevState) => !prevState)
    }
    return (
        <div className="productContent">
            <h1 className="productContent--title">{"nos épices".toUpperCase()}</h1>
            <div onMouseEnter={handleOnmouseHover}>
                <div onMouseLeave={handleOnmouseHover}>
                    {changePicture ? firstPx : secondPx}
                </div>
            </div>
        </div>
    )
}