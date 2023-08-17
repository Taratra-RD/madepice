import Footer from "../components/Footer"
import HeaderAbout from "../components/Header"
import "./css/About.css"
import leaves from "../images/Leaves 1.png"
import leaves_1 from "../images/Leaves 2.png"
import line from "../images/Line 1.png"
import { useState, useEffect } from "react"
import "../components/css/HeaderAbout.css"

const About = () => {

    const [scroll_1,translation_1] = useState(0)
    const [scroll_2,translation_2] = useState(0)
    const [scroll_3,translation_3] = useState(0)
    const [scroll_4,lineAnimation] = useState(0)

    const setTranslation_1 = () =>{
        translation_1(window.scrollY)
    }

    const setTranslation_2 = () =>{
        translation_2(window.scrollY)
    }

    const setTranslation_3 = () =>{
        translation_3(window.scrollY)
    }

    const setLineAnimation = () =>{
        lineAnimation(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll',setTranslation_1);

        return () => {
            window.removeEventListener('scroll',setTranslation_1)
        }

    },[])

    useEffect(()=>{
        window.addEventListener('scroll',setTranslation_2);

        return () => {
            window.removeEventListener('scroll',setTranslation_2)
        }
    },[])

    useEffect(()=>{
        window.addEventListener('scroll',setTranslation_3);

        return () => {
            window.removeEventListener('scroll',setTranslation_3)
        }
    },[])

    useEffect(()=>{
        window.addEventListener('scroll',setLineAnimation);

        return () => {
            window.removeEventListener('scroll',setLineAnimation)
        }
    },[])

    const isScrolling_1 = scroll_1 > 100;
    const isScrolling_2 = scroll_2 > 375;
    const isScrolling_3 = scroll_3 > 575;
    const isScrolling_4 = scroll_4 > 100;

    return(
    <>
        <div className="about">
            <div className="imgGroups2">
                <div className="about--header">
                    <HeaderAbout/>
                </div>
                <div className="title-1">
                    <h1 className="title-1-text">QUI SOMMES-NOUS?</h1>
                </div>
            </div>
            <div className="contain">
                <div className={`history-content ${isScrolling_1 ? 'slide-left-1':''} `}>
                    <div>
                        <h4>1919</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Adipiscing semper purus non mollis sagittis tincidunt nec ut est. 
                            Augue nisl consequat adipiscing dignissim quis egestas pretium elementum. 
                            Vitae convallis amet enim elementum.
                            Dis odio eleifend turpis consequat faucibus.
                        </p> 
                    </div>
                </div>
                <div className={`history-content ${isScrolling_2 ? 'slide-left-2':''} `}>
                    <div>
                        <h4>1919</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Adipiscing semper purus non mollis sagittis tincidunt nec ut est. 
                            Augue nisl consequat adipiscing dignissim quis egestas pretium elementum. 
                            Vitae convallis amet enim elementum.
                            Dis odio eleifend turpis consequat faucibus.
                        </p> 
                    </div>
                </div>
                <div className={`history-content ${isScrolling_3 ? 'slide-left-3':''} `}>
                    <div>
                        <h4>1919</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Adipiscing semper purus non mollis sagittis tincidunt nec ut est. 
                            Augue nisl consequat adipiscing dignissim quis egestas pretium elementum. 
                            Vitae convallis amet enim elementum.
                            Dis odio eleifend turpis consequat faucibus.
                        </p> 
                    </div>
                </div>
                <div className="title-2">
                    <h1>NOS ENGAGEMENTS</h1>
                </div>
                <div className="container container--about">
                    <p className="title-2-content">
                        Lorem ipsum dolor sit amet consectetur. Turpis mauris id malesuada cursus. 
                        Aliquet iaculis eleifend at felis faucibus. Ut gravida facilisi in felis feugiat nisi viverra 
                        ut pulvinar. Facilisis aliquet lacus ultrices enim purus sem et amet. 
                        Gravida commodo ut massa dignissim diam a massa. Nisl aliquam fermentum nullam vulputate. 
                        Turpis viverra mi adipiscing ante tincidunt augue pharetra. Lobortis scelerisque scelerisque 
                        cras a vestibulum nulla sem. Rhoncus vitae euismod nec ut sapien tempor sit at. 
                        Suspendisse imperdiet sed ac mattis gravida urna. Arcu turpis pretium non vulputate vulputate 
                        fames diam. Enim urna pellentesque ultrices ac feugiat adipiscing pulvinar. 
                        Vitae proin erat semper elementum mi.
                        Turpis interdum suspendisse mauris in tristique lacus nunc tellus ullamcorper. Nibh est fringilla facilisi eleifend enim 
                        aliquet vitae a sagittis. Interdum ac pharetra interdum mauris ac. Augue eu in.
                    </p>
                </div>
                <div className="title-2">
                    <h1>NOS VALEURS</h1>
                </div>
                <div className="container container--about">
                    <p className="title-2-content">
                        Lorem ipsum dolor sit amet consectetur. Turpis mauris id malesuada cursus. 
                        Aliquet iaculis eleifend at felis faucibus. Ut gravida facilisi in felis feugiat nisi viverra 
                        ut pulvinar. Facilisis aliquet lacus ultrices enim purus sem et amet. 
                        Gravida commodo ut massa dignissim diam a massa. Nisl aliquam fermentum nullam vulputate. 
                        Turpis viverra mi adipiscing ante tincidunt augue pharetra. Lobortis scelerisque scelerisque 
                        cras a vestibulum nulla sem. Rhoncus vitae euismod nec ut sapien tempor sit at. 
                        Suspendisse imperdiet sed ac mattis gravida urna. Arcu turpis pretium non vulputate vulputate 
                        fames diam. Enim urna pellentesque ultrices ac feugiat adipiscing pulvinar. 
                        Vitae proin erat semper elementum mi.
                        Turpis interdum suspendisse mauris in tristique lacus nunc tellus ullamcorper. Nibh est fringilla facilisi eleifend enim 
                        aliquet vitae a sagittis. Interdum ac pharetra interdum mauris ac. Augue eu in.
                    </p>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
            <img className="leaves" src={leaves} />
            <img className="leaves-1" src={leaves_1} />
            <img className={`line ${isScrolling_4 ? 'line-anim':''} `} src={line} />
        </div>
    </>

    )
}

export default About