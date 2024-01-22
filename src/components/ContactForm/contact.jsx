import React, { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
import Instagram from "../ContactForm/Instagram.png"
import Github from "../ContactForm/github.png"
import Linkedin from "../ContactForm/linkedin.png"

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ud0u6a7', 'template_i7vauga', form.current, 'fLYLwy4PzgKnFSd7W')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                alert("Message sent!");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='contact_section'>
            <div className="container_contact">
                <div className="contactInfo">
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><img src="#" alt="Location icon" /></span>
                                <span>New Delhi</span>
                            </li>
                            <li>
                                <span><img src="" alt="Mail icon" /></span>
                                <span><a href="https://keshavdayal205@gmail.com" >keshavdayal205@gmail.com</a></span>
                            </li>
                            <li>
                                <span><img src="#" alt="Call icon" /></span>
                                <span>+91-9958402122</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="sci">
                       <li><a href="https://www.instagram.com/keshxvdayal"><img src={Instagram} alt="Instagram.png" width={60} height={60} /></a></li>
                        <li><a href="https://github.com/keshxvdayal" ><img src={Github} alt="github.png" width={60} height={60} /></a></li>
                        <li><a href="https://www.linkedin.com/in/keshav-dayal/" ><img src={Linkedin} alt="LinkedIn icon"  width={60} height={60} /></a></li>
                    </ul>
                </div>
                <div className="contactForm">
                    <h2>Send a Message</h2>
                    <form className="formBox" href=" " ref={form} onSubmit={sendEmail}>
                        <div className="inputBox w50" name="First Name">
                            <h3 className='form-h3'>First Name:</h3>
                        {/* <span>First Name</span> */}
                        <input type="text" name="user_name"/>
                        </div>
                        <div className="inputBox w50">
                        <h3 className='form-h3'>Last Name:</h3>
                        <input type="text" name="user_name" />
                        </div>
                        <div className="inputBox w50">
                        <h3 className='form-h3'>Email:</h3>
                        <input type="email" name="user_email" />
                        </div>
                        <div className="inputBox w100">
                        <h3 className='form-h3'>Message:</h3>
                        <textarea name="message" rows={40} cols={50} required/>
                        </div>
                        <div className="inputBox w100">
                        <input className="inputBox w100" type="submit" value="Send" />
                        </div>
                    </form>
                    </div>
                {/* </div> */}
            </div>
        </section>
    );
};

export default ContactUs
