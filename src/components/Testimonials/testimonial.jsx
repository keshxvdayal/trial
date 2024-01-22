import React from "react";
import "./testimonial.css";
const Testimonials = () => {
    return (
      <section className="testimonials-container">
        <h2>What Our Fans Are Saying</h2>
        <div className="testimonials">
          <div className="testimonial">
            <h3>"In processing"</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at laudantium dignissimos veritatis debitis rem deserunt neque dolore maiores culpa. <span className="testimonal-author">Lily R.</span>
            </p>
          </div>
          <div className="testimonial">
            <h3>"In processing"</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at laudantium dignissimos veritatis debitis rem deserunt neque dolore maiores culpa.{' '}
              <span className="testimonal-author">Albert Z.</span>
            </p>
          </div>
          <div className="testimonial">
            <h3>"In processing"</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at laudantium dignissimos veritatis debitis rem deserunt neque dolore maiores culpa.{' '}
              <span className="testimonal-author">Jennifer T.</span>
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;