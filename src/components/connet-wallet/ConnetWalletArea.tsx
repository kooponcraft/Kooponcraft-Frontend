

import React from 'react';
import AppImage from "@/components/common/AppImage";

const conner_data = [
  {
    id: 1,
    name: "Metamask",
    image: "/assets/img/bg-img/metamask.png",
    badgeText: "Hot",
    buttonInfo: [
      {
        text: "Connect",
        color: "warning",
        path: "/login",
        icon: "bi-arrow-right"
      }
    ]
  },
  {
    id: 2,
    name: "Coinbase Wallet",
    image: "/assets/img/bg-img/coinbase.png",
    badgeText: "",
    buttonInfo: [
      {
        text: "Connect",
        color: "warning",
        path: "/login",
        icon: "bi-arrow-right"
      }
    ]
  },
  {
    id: 3,
    name: "Kaikas",
    image: "/assets/img/bg-img/kaikas.png",
    badgeText: "",
    buttonInfo: [
      {
        text: "Connect",
        color: "warning",
        path: "/login",
        icon: "bi-arrow-right"
      }
    ]
  },
  {
    id: 4,
    name: "Venly",
    image: "/assets/img/bg-img/venly.png",
    badgeText: "",
    buttonInfo: [
      {
        text: "Connect",
        color: "warning",
        path: "/login",
        icon: "bi-arrow-right"
      }
    ]
  }
]

const ConnetWalletArea = () => {
  return (
    <>
      <div className="connect-wallet-wrapper">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-70">Connect with one of our available wallet providers.</h2>
          </div>
          <div className="row g-4 g-xl-5 justify-content-center">

            {conner_data.map((item, i) => (
              <div key={i} className="col-12 col-md-9 col-lg-6 col-xl-5">
                <div className="card wallet-card shadow-sm">
                  <div className="card-body px-4">
                    <div className="d-flex align-items-center">
                      <div className="img-wrap">
                        <AppImage src={item.image} alt="" /></div>
                      <h4 className="mb-0 me-3">{item.name}
                      {item.badgeText && 
                        <span className="badge bg-danger rounded-pill align-top fz-12 ms-1">
                          {item.badgeText}
                        </span>                      
                      }
                      </h4>
                      <a className="btn btn-sm btn-warning rounded-pill ms-auto" href="#">
                        Connect<i className="ms-1 bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))} 

          </div>
        </div>
      </div>
    </>
  );
};

export default ConnetWalletArea;