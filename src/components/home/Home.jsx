import React, { useLayoutEffect } from "react";
import "./Home.css";
import { Expo } from "gsap/all";
import gsap from "gsap";
import { Link } from 'react-router-dom';
// import About from "/Users/jarvis/Desktop/Porfolio/KESHAV'S portfolio/Portfolio/src/components/About/About.jsx";

const Home = () => {
    var elements = document.querySelectorAll(".elem");
    elements.forEach(function (elem) {
        var h1s = elem.querySelectorAll("h1");
        var index = 0;
        var animating = false;

        document.querySelector("#main").addEventListener("click", function () {
            if (!animating) {
                animating = true;
                gsap.to(h1s[index], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1,
                    onComplete: function () {
                        gsap.set(this._targets[0], { top: "100%" });
                        animating = false;
                    },
                });

                index === h1s.length - 1 ? (index = 0) : index++;

                gsap.to(h1s[index], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1,
                });
            }
        });
    });


    return (
        <div id="main">
            <div id="back">
                {/* <img className="img" src="1.jpg" alt="#" />
                <img className="img" src="../../assets/2.jpg" alt="#" />
                <img className="img" src="../../assets/3.jpg" alt="#" />
                <img className="img" src="../../assets/4.jpg" alt="#" />
                <img className="img" src="../../assets/5.jpg" alt="#" /> */}
            </div>
            <div id="top">
                <div id="working">
                    <div id="nav">
                        <div id="nleft">
                            <a href="#">About</a>
                            <a href="#">Products</a>
                        </div>
                        <div id="nright">
                            <a href="#">Services</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div id="hero">
                        <div id="heroleft">
                            <div className="elem">
                                <h1>Hey!! </h1>
                                <h1>a </h1>
                                <h1> </h1>
                                <h1></h1>
                            </div>
                            <div className="elem">
                                <h1>My Name is</h1>
                                <h1>Web </h1>
                                <h1>Android</h1>
                                <h1>Software</h1>
                            </div>
                            <div className="elem">
                                <h1>Keshav</h1>
                                <h1>Developer</h1>
                                <h1>Developer</h1>
                                <h1>Developer</h1>
                            </div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
