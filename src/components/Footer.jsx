import "./css/Footer.css"

export default function Footer() {
    return (
        <div className="footer container-fluid" style={{color:'white'}}>
            <p><i className="fa fas fa-phone" style={{color:'white'}}></i> 0345891851</p>
            <p>Email : madepices@gmail.com</p>
            <p><i className="fa fas fa-map" style={{color:'white'}}></i>Lot III L Ankaditoho</p>
            
            <div className="" style={{right:0}}>
                <i className="fa fab fa-instagram fa-xl" style={{color:'white',marginRight:'0.5em'}}></i>
                <i className="fa fab fa-facebook fa-xl" style={{color:'white',marginRight:'0.5em'}}></i>
            </div>
        </div>
    )
}

