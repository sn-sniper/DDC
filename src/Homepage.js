import React from "react";
import vid_1 from "./assets/vid_1.mp4";
import Home from "./assets/Home.png";
import gif from "./assets/gif.gif"
import { Link } from 'react-router-dom';
import './home.css';
import trans_bg_logo from './assets/trans_bg_logo.png'
import { useNavigate } from "react-router-dom"

function Homepage() {
    const navigate = useNavigate()
    const goToSurvey=()=>{
        navigate("/Survey");
    }
    const goToChat =()=>{
        navigate("/Live-Chat");
    }
    return (

        <div className="Main">

            <div className="nav">
                <ul>
                    <Link exact to="/DDC/" className="Link">Home</Link>

                    <Link to="/Survey" className="Link">Survey</Link>
                </ul>
            </div>
            <video src={vid_1} autoPlay muted loop />
            <img src={Home} alt="Home" />
            <button className="toSurvey" type="button" id="ToSurvey-btn" onClick={() => goToSurvey()}>Go to Survey! 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
            </button>
            <button className="toChat" type="button" id="ToChat-btn" onClick={() => goToChat()}>Chat with us!
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
            </button>
            <img src={gif} alt />
            <footer className="footer" id="contact">
                <div className="section__container footer__container">
                    <div className="footer__col">
                        <div className="logo">
                            <a href="#home"><img src={trans_bg_logo} alt="logo" /></a>
                        </div>
                        <p className="section__description">
                            Welcome to our platform for instant online dental care! Our website offers quick access to dental consultations and services without the need for an appointment. <br/>You can connect with our experienced dentists instantly, receive advice, and even get prescriptions if needed. We’re here to provide you with convenient and efficient dental care whenever you need it.
                        </p>
                        <button className="btn">Live Chat</button>
                    </div>
                    <div className="footer__col">
                        <h4>OUR SERVICES</h4>
                        <ul className="footer__links">
                            <li><a href="#">Online appointments</a></li>
                            <li><a href="#">Virtual consultations </a></li>
                            <li><a href="#">Instant diagnosis</a></li>
                            <li><a href="#">Speedy treatment</a></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4>CONTACT US</h4>
                        <ul className="footer__links">
                            <li><a href="./contact.html">ha88806234@gmail.com</a></li>
                            <li><a href="./contact.html">+961 70 659 877</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bar">
                    Copyright © 2024 Delivered Dental Care. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Homepage;