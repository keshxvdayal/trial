import React from "react";
import "./project.css";
import mixitup from "mixitup";
import Shery from "sheryjs";

const Project = () => {

    var containerEl = document.querySelector('.portfolio__container');
    if (containerEl) {
        mixitup(".portfolio__container", {
            selectors: {
                target: ".portfolio__content"
            },
            animation: {
                duration: 400
            }
        });
    }
    
    /* Link active portfolio */
    var numberButtons = document.querySelectorAll(".portfolio__item")
    for (var i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener("click", changeButton.bind(null, i));
    }
    
    function changeButton(selected, e) {
        var oldActive = document.getElementsByClassName("active--portfolio");
        for (var i = 0; i < oldActive.length; i++) {
            oldActive[i].classList.remove("active--portfolio");
        }
        e.target.classList.add("active--portfolio");
    }


    return (
        <section className="portfolio_section bd-container" id="">
            <h2 className="section-title">PROJECT</h2>
            <div className="portfolio__nav">
                <span className="portfolio__item active--portfolio" data-filter="all">All</span>
                <span className="portfolio__item" data-filter=".web">Web</span>
                <span className="portfolio__item" data-filter=".ux">UI/UX</span>
                <span className="portfolio__item" data-filter=".app">App</span>
            </div>
            <div className="portfolio__container bd-grid">
                <div className="portfolio__content mix web">
                    <a href="#" className="image"><img src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-Clay-Doe/main/assets/img/work1.jpg" alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="">Web Development</span>
                        <a href="#"><h2 className="">New Portfolio of work done for a client</h2></a>
                        <a href="#" className="button ">View Details</a>
                    </div>
                </div>
                <div className="portfolio__content mix web">
                    <a href="#" className="image"><img src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-Clay-Doe/main/assets/img/work2.jpg" alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="">Web Development</span>
                        <a href="#"><h2 className="">New Portfolio of work done for a client</h2></a>
                        <a href="#" className="button ">View Details</a>
                    </div>
                </div>
                <div className="portfolio__content mix ux">
                    <a href="#" className="image"><img src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-Clay-Doe/main/assets/img/work3.jpg" alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="">UI/UX</span>
                        <a href="#"><h2 className="">New Portfolio of work done for a client</h2></a>
                        <a href="#" className="button ">View Details</a>
                    </div>
                </div>
                <div className="portfolio__content mix ux">
                    <a href="#" className="image"><img src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-Clay-Doe/main/assets/img/work4.jpg" alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="">UI/UX</span>
                        <a href="#"><h2 className="">New Portfolio of work done for a client</h2></a>
                        <a href="#" className="button ">View Details</a>
                    </div>
                </div>
                <div className="portfolio__content mix app">
                    <a href="#" className="image"><img src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-Clay-Doe/main/assets/img/work5.jpg" alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="">Mobile App</span>
                        <a href="#"><h2 className="">New Portfolio of work done for a client</h2></a>
                        <a href="#" className="button ">View Details</a>
                    </div>
                </div>
                <div className="portfolio__content mix app">
                    <a href="#" className="image"><img src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-Clay-Doe/main/assets/img/work6.jpg" alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="">Mobile App</span>
                        <a href="#"><h2 className="">New Portfolio of work done for a client</h2></a>
                        <a href="#" className="button ">View Details</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
