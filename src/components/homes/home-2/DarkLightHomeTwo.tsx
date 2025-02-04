
import React from 'react';

const DarkLightHomeTwo = () => {
  return (
    <>
      <div className="dark-light-wrapper" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="200">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="mb-0 text-white" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">Light mode is available!</h5>
           
          <div className="dark-light-mode" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800">
            <input id="darkLightSwitch" type="checkbox" />
            <label className="shadow" htmlFor="darkLightSwitch">Toggle</label>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DarkLightHomeTwo;