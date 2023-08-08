import Footer from "../components/Footer"
import HeaderAbout from "../components/HeaderAbout"
import "./css/About.css"
import leaves from "../images/Leaves 1.png"
import leaves_1 from "../images/Leaves 2.png"
import line from "../images/Line 1.png"

const About = () => {

    return(
    <>
        <div className="about">
            <div className="imgGroups2">
                <div className="about--header">
                    <HeaderAbout/>
                </div>
                <div className="title-1">
                    <h1 className="title-1-text">QUI NOUS SOMMES</h1>
                </div>
            </div>
            <div className="contain">
                <div className="history-content">
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
                <div className="history-content">
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
                <div className="history-content">
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
                <div className="container">
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
                <div className="container">
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
            <img className="line" src={line} />
        </div>
    </>

    )
}

export default About