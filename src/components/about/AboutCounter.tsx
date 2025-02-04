

import React from 'react';
import Count from '../common/Count';

interface DataType {
  value: number;
  title: string;
}

const counter_data: DataType[] = [
  {
    value: 3409,
    title: "Total Items"
  },
  {
    value: 7831,
    title: "Users"
  },
  {
    value: 45236,
    title: "NFTs"
  },
  {
    value: 247,
    title: "Daily Sale"
  }
]


const AboutCounter = () => {
  return (
    <>
      <div className="container">
        <div className="counter-wrap p-5 shadow border">
          <div className="row g-4">
            {counter_data.map((item, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="single-counter text-center">
                  <h4 className="counter h2 fw-bold">                     
                    <Count number={item.value} add_style={true} />
                    </h4>
                  <h6 className="mb-0">{item.title}</h6>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCounter;