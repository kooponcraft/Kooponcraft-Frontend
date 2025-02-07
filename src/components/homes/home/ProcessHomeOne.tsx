import process_data from '@/data/process';
import AppImage from "@/components/common/AppImage";
import React from 'react';

const ProcessHomeOne = () => {
  return (
    <>
      <div className="process-wrapper" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4">

            {process_data.map((item, i) => (
              <div key={i} className="w-full sm:w-1/2 xl:w-1/4">
                <div className="single-process-card bg-gray-200 border-0" data-aos="fade-up" data-aos-duration="750" data-aos-delay={item.animationDelay}>
                  <div className="p-4 text-center">
                    <AppImage className="mb-3 mx-auto" src={item.image} alt="" />
                    <h5 className="mb-3">{item.heading}</h5>
                    <p className="mb-0 text-gray-500">{item.subTitle}</p>
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