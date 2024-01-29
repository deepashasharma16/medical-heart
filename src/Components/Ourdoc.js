import React from 'react'
import img from "../assets/doc2.png"

const Ourdoc = () => {
  return (
    <div>
      <div className="heo min-h-screen bg-secondary ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} />
          <div>
            
            <h1 className="text-5xl font-bold">Our Doctors<br/> specialize in you</h1>
            <p className="py-6 text-white">Problems trying to resolve the conflict between<br/> 
the two major realms of Classical physics: 
Newtonian mechanics </p>
            <button className="btn btn-primary mx-4 text-white">Join Us</button>
            <button className="btn btn-outline text-white">Learn More</button>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Ourdoc
