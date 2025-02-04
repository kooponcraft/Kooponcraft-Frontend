
'use client'

import React, { useState } from 'react';
// import Chart from 'react-apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const DashboardPriceHistory = () => {


  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);

  return (
    <>

      <div className="col-12 col-xl-8">
        <div className="card border-0 shadow-sm">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 pb-3">
              <div className="d-flex align-items-center">
                <img className="me-1" src="/assets/img/core-img/ethereum.png" alt="" />
                <h5 className="mb-0">Price History</h5>
              </div>

               <Chart options={options} series={series} type="bar" width="100%"
                height={300} />

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default DashboardPriceHistory;