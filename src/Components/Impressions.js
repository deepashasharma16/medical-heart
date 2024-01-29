import React from 'react'
import imp1 from "../assets/imp1.png"
import imp2 from "../assets/imp2.png"
import star from "../assets/star.png"

const Activity = () => {
  return (
    <div>
    <div className="hero min-h-screen  bg-secondary">
<div className="hero text-center">
  <div className="max-w-xl">
    <h1 className="text-5xl font-bold">See Our Impressions</h1>
    <p className="py-6 text-white">Problems trying to resolve the conflict between<br/> the two major realms of Classical physics: Newtonian mechanics </p>
    {/* <button className="btn btn-primary">Get Started</button> */}
    <div className="flex">
              <div className="card w-96 bg-base-100 shadow-xl mr-4">
                <figure className="px-0 pt-0">
                  
                  <img
                    src={imp1}
                    alt="imp1"
                  />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title">Painless procedures
                <div className="badge badge-secondary"  style={{color: 'white', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 16, letterSpacing: 0.20, wordWrap: 'break-word'}}><img src={star} alt="star" ></img>4.9</div></h2>

            
                  <p style={{ color: '#737373' }}>We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-0 pt-0">
                  <img
                    src={imp2}
                    alt="imp2"
                  />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title">Emergency Case
                <div className="badge badge-secondary" style={{color: 'white', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 16, letterSpacing: 0.20, wordWrap: 'break-word'}}><img src={star} alt="star" ></img>4.9</div></h2>
                  <p style={{ color: '#737373' }}>We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>
                </div>
              </div>
            </div>
  </div>
</div>
</div>
  </div>
  )
}

export default Activity
