import img from "../assets/doctor.png"

const Hero = () => {
  return (
    <div>
      <div className="heo min-h-screen bg-secondary ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} />
          <div>
            
            <h1 className="text-5xl font-bold">Meet the Best<br/> Doctors</h1>
            <p className="py-6 text-white">We are always fully focused on helping your<br/> child and you </p>
            <button className="btn btn-primary mx-4 text-white">Join Us</button>
            <button className="btn btn-outline text-white">Learn More</button>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
