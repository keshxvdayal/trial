import React from "react";
import "./service.css";

const Services = () => {
    return (
      <div className="container_service">
        <h2>Services</h2>
        <section className="services">
          <div className="card">
            <div className="content">
              <div className="icon"><i className="fa fa-code"></i></div>
              <div className="title">Web Development</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="icon"><i className="fa fa-mobile"></i></div>
              <div className="title">App Development</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="icon"><i className="fa fa-paint-brush"></i></div>
              <div className="title">UI/UX</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="icon"><i className="fa fa-laptop"></i></div>
              <div className="title">Software Development</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="icon"><i className="fa fa-wordpress"></i></div>
              <div className="title">Wordpress</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Services;