
'use client'

import React, { useState } from 'react';
// import Chart from 'react-apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



const DashboardStatisticsChart = () => {

  const [chartData] = useState({
    series: [{
      name: 'Visitors',
      data: [364, 487, 579, 632, 654, 423, 487, 645, 658, 589, 635, 702, 585, 670, 705, 605, 852, 579, 632, 654, 547, 745, 645, 658, 589, 647, 478, 485, 547, 631]
    }],
    options: {
      chart: {
        id: 'area-datetime',
        zoom: {
          autoScaleYaxis: true
        },
        toolbar: {
          show: false
        }
      },
      labels: ['1 Jan 2022', '2 Jan 2022', '3 Jan 2022', '4 Jan 2022', '5 Jan 2022', '6 Jan 2022', '7 Jan 2022', '8 Jan 2022', '9 Jan 2022', '10 Jan 2022', '11 Jan 2022', '12 Jan 2022', '13 Jan 2022', '14 Jan 2022', '15 Jan 2022', '16 Jan 2022', '17 Jan 2022', '18 Jan 2022', '19 Jan 2022', '20 Jan 2022', '21 Jan 2022', '22 Jan 2022', '23 Jan 2022', '24 Jan 2022', '25 Jan 2022', '26 Jan 2022', '27 Jan 2022', '28 Jan 2022', '29 Jan 2022', '30 Jan 2022'],
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        style: '',
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ["#8480ae"],
            fontFamily: 'DM Sans, sans-serif',
          },
        },
        title: {
          style: {
            fontSize: '12px',
            fontFamily: 'DM Sans, sans-serif',
          },
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        },
        style: {
          fontSize: '12px',
          fontFamily: 'DM Sans, sans-serif'
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 1,
          stops: [0, 100]
        }
      }
    }
  });


  return (
    <>
      <div className="col-12 col-xxl-6">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 pb-0">
              <h5 className="ms-3">Monthly Visitors</h5>
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="area"
                width="100%"
                height={320}
              />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default DashboardStatisticsChart;