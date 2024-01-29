import React from 'react'
import heart from '../assets/heart.svg'
import med_his from '../assets/med_history.svg'

const Activity = () => {
  return (
    <div>
    <div className="hero min-h-screen  bg-secondary">
<div className="hero text-center">
  <div className="max-w-xl">
    <h1 className="text-5xl font-bold">Our Activity</h1>
    <p className="py-6 text-white">Problems trying to resolve the conflict between<br/> the two major realms of Classical physics: Newtonian mechanics </p>
    {/* <button className="btn btn-primary">Get Started</button> */}
    <div className="flex">
              <div className="card w-96 bg-base-100 shadow-xl mr-4">
                <figure className="px-10 pt-10">
                  <img
                    src={heart}
                    alt="Heart"
                  />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title" style={{ borderBottom: '2px solid #E74040',width: '40%' }}>Health Queries</h2>
            
                  <p style={{ color: '#737373' }}>The gradual accumulation and small-scale..</p>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={med_his}
                    alt="Medical heart"
                  />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title" style={{ borderBottom: '2px solid #E74040',width: '60%' }}>Quick examination</h2>
                  <p style={{ color: '#737373' }}>The gradual accumulation and small-scale..</p>
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
