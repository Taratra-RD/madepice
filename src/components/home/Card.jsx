import { Card as CardBt } from "react-bootstrap"
import '../css/Card.css'

const Card = ({img,title}) => {
    return (
        <>
            <CardBt>
                <CardBt.Img src={img} style={{ width: '15em',height:'100%' }} />
                
            </CardBt>
        </>
    )
}
export default Card