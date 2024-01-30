import React from 'react';
import imp1 from "../assets/imp1.png";
import imp2 from "../assets/imp2.png";
import star from "../assets/star.png";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";


const Activity = () => {
  return (
    <div className="hero min-h-screen bg-secondary">
      <div className="hero text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">See Our Impressions</h1>
          <p className="py-6 text-white">Problems trying to resolve the conflict between<br/> the two major realms of Classical physics: Newtonian mechanics </p>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl relative overflow-hidden mr-4">
              {/* Add a red box with "Sale" written on it */}
              <div className="sale-box absolute top-4 left-4 bg-red-500 text-white p-2" 
              style={{ fontSize: '14px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.10)',
              borderRadius: 3,
              overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'inline-flex',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: 0.20,
    wordWrap: 'break-word', }}>
                Sale
              </div>
              <figure className="px-0 pt-0">
                <img src={imp1} alt="imp1" />
               {/* Container for icons */}
               <div className="icon-container absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ top: '45%' }}>
               <div className="icon-background bg-white rounded-full p-2 ">
    <IoIosHeartEmpty className="icon" style={{ fontSize: '24px', color: '#333' }} />
  </div>
  <div className="icon-background bg-white rounded-full p-2 mx-2">
    <CiShoppingCart className="icon" style={{ fontSize: '24px', color: '#333' }} />
  </div>
  
  <div className="icon-background bg-white rounded-full p-2">
    <FaEye className="icon" style={{ fontSize: '24px', color: '#333' }} />
  </div>
</div>
              </figure>
              <div className="card-body items-center text-center">
                {/* Add new element for purple text */}
                <p style={{ color: '#8D5CF6', fontSize: '14px',fontWeight:'700', marginBottom: 0,wordWrap: 'break-word' }}>Painless Procedure</p>
              
                <h2 className="card-title">
                <span style={{ whiteSpace: 'nowrap' }}>Painless Procedure</span>
                  <div className="badge badge-secondary" style={{ color: 'white', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 16, letterSpacing: 0.20, wordWrap: 'break-word' }}>
                    <img src={star} alt="star" />
                    4.9
                  </div>
                </h2>
                <p style={{ color: '#737373' }}>We focus on ergonomics and meeting you where you work. It's only a <br/>keystroke away.</p>
                {/*download thing*/}
        
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl relative overflow-hidden mr-4">
              {/* Add a red box with "Sale" written on it */}
              <div className="sale-box absolute top-4 left-4 bg-red-500 text-white p-2" 
              style={{ fontSize: '14px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.10)',
              borderRadius: 3,
              overflow: 'hidden',
              justifyContent: 'flex-start',
              alignItems: 'center',
              display: 'inline-flex',
              color: 'white',
              fontSize: 14,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: 0.20,
              wordWrap: 'break-word', }}>
                Sale
              </div>
              <figure className="px-0 pt-0">
                <img src={imp2} alt="imp2" />
             {/* Container for icons */}
             <div className="icon-container absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "style={{ top: '45%' }}>
             <div className="icon-background bg-white rounded-full p-2">
    <IoIosHeartEmpty className="icon" style={{ fontSize: '24px', color: '#333' }} />
  </div>
  
  <div className="icon-background bg-white rounded-full p-2 mx-2">
    <CiShoppingCart className="icon" style={{ fontSize: '24px', color: '#333' }} />
  </div>
  
  <div className="icon-background bg-white rounded-full p-2">
    <FaEye className="icon" style={{ fontSize: '24px', color: '#333' }} />
  </div>
</div>
              </figure>
              
              <div className="card-body items-center text-center">
              
                <p style={{ color: '#8D5CF6', fontSize: '14px',fontWeight:'700', marginBottom: 0,wordWrap: 'break-word' }}>Best Dental Surgeons</p>
                <h2 className="card-title">
                <span style={{ whiteSpace: 'nowrap' }}>Emergency Case</span>
                  <div className="badge badge-secondary" style={{ color: 'white', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 16, letterSpacing: 0.20, wordWrap: 'break-word' }}>
                    <img src={star} alt="star" />
                    4.9
                  </div>
                </h2>
                <p style={{ color: '#737373' }}>We focus on ergonomics and meeting you where you work. It's only a <br></br>keystroke away.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
