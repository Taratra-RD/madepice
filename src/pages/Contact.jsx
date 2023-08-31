import HeaderAbout from "../components/Header"
import "./css/Contact.css"
import PhoneIcons from "../images/Icons.png"
import MailIcons from "../images/Icons(1).png"
import LocationIcons from "../images/Icons(2).png"
import FollowIcons from "../images/F-US.png"
import Footer from "../components/Footer"

const Contact = () =>{
    return(
        <>
            <div className="conatct">
                <div className="landing-page2">
                    <div className="contact-header">
                        <HeaderAbout/>
                    </div>
                </div>
                <div className="body--contain">
                    <div className="contact--list">
                        <div className="list">
                            <div className="icons"> <img src={PhoneIcons} alt="" /></div>
                            <div className="content">
                                <div className="title"><h3>Appelez-nous</h3></div>
                                <p>
                                    <li>+261 34 00 000 00</li>
                                    <li>+261 34 00 000 00</li>
                                </p>
                            </div>
                        </div>
                        <div className="red--line"></div>
                        <div className="list">
                            <div className="icons"><img src={MailIcons} alt="" /></div>
                            <div className="content">
                                <div className="title"><h3>Adresse e-mail</h3></div>
                                <p>
                                    <li>commercial@madepices.mg</li>
                                </p>
                            </div>
                        </div>
                        <div className="red--line"></div>
                        <div className="list">
                            <div className="icons"><img src={LocationIcons} alt="" /></div>
                            <div className="content">
                                <div className="title"><h3>Visitez-nous</h3></div>
                                <p>
                                    <li>Lieux</li>
                                </p>
                            </div>
                        </div>
                        <div className="red--line"></div>
                        <div className="list">
                            <div className="icons"><img src={FollowIcons} alt="" /></div>
                            <div className="content">
                                <div className="title"><h3>Suivez-nous</h3></div>
                                <p>
                                    <li>Madépices</li>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Contact