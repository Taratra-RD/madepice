import Header from "../components/Header"
import React from 'react';
import MainContent from "../components/MainContent";
import "./css/Home.css"
import Footer from "../components/Footer";

function Home() {

    return (
        <div className="home">
            <div className="home-background">
                <div className="home--header">
                    <Header />
                </div>

                <div className="home--mainContent">
                    <MainContent />
                </div>
            </div>
            <div className="mainContent--image">
                <div className="mainContent--image--foot--up"></div>
                <div className="mainContent--image--foot--down"></div>
            </div>
            <div className="home--footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home