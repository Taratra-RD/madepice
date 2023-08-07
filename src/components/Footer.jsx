import "./css/Footer.css"

export default function Footer() {
    return (
        <div className="footer container-fluid" style={{color:'white'}}>
            <div className="container">
                <p><i className="fa fas fa-phone" style={{color:'white'}}></i>  +261 34 58 918 51</p>
                <p><i className="fa fas fa-envelope" style={{color:'white'}}></i>  madepices@gmail.com</p>
                <p><i className="fa fas fa-location-dot" style={{color:'white'}}></i>Lot III L Ankaditoho</p>
                <p><i className="fa fas fa-map" style={{color:'white'}}></i>Antananarivo 101</p>
                <p>Tous droits résérvés <i className="fa far fa-copyright" style={{color:'white'}}></i> Copyright 2023</p>
            </div>
            <div className="container" style={{right:0}}>
                <i className="fa fab fa-instagram fa-2xl" style={{color:'white',marginRight:'0.5em'}}></i>
                <i className="fa fab fa-facebook fa-2xl" style={{color:'white',marginRight:'0.5em'}}></i>
            </div>
        </div>
    )
}

