import "./css/Footer.css"
import logo from '../images/a.png'
export default function Footer() {
    return (
        <div className="footer container-fluid" style={{color:'white'}}>
            <img src={logo} alt="" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',width:'13em',marginTop:'2em',marginLeft:'5em'}}/>
            <div className="container" style={{right:0}}>
                
            </div>
        </div>
    )
}

