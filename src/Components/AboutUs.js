import React from "react";
import img from "../assets/video.png";
const AboutUs = () => {
  return (
    <div>
        
      <div className="hero min-h-screen bg-secondary">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Our Department</h1>
            <p className="py-6 text-white">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics{" "}
            </p>
    <img src={img} />

            {/* <button className="btn btn-primary">Get Started</button> */}
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
