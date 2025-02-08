
import process_data from '@/data/process';
import React from 'react';
import AppImage from "@/components/common/AppImage";

const ProcessHomeOne = () => {
  return (
    <>
       <div className="process-wrapper" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
      <div className="container">
        <div className="row g-4 g-xxl-5 align-items-center justify-content-center">

          {process_data.map((item, i) => (
            <div key={i} className="col-12 col-sm-6 col-xl-3">            
            <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration="750" data-aos-delay={item.animationDelay}>
              <div className="card-body p-4 text-center"><AppImage className="mb-3 mx-auto" src={item.image} alt="" />                
              <h5 className="mb-3">{item.heading}</h5>
                <p className="mb-0" style={{color: '#8084AE'}}>{item.subTitle}</p>
              </div>              
              <div className="step-number">{item.id}</div>
            </div>
          </div>
          ))} 

        </div>
      </div>
    </div>
    </>
  );
};

export default ProcessHomeOne;