
import Link from 'next/link';
import Image from "next/image";
import React from 'react';

const wallet_data = [
  {
    id: 1,
    name: "Metamask",
    image: "/assets/img/bg-img/metamask.png",
    badgeText: "Hot",
  },
  {
    id: 2,
    name: "Coinbase Wallet",
    image: "/assets/img/bg-img/coinbase.png",
    badgeText: "",
  },
  {
    id: 3,
    name: "Kaikas",
    image: "/assets/img/bg-img/kaikas.png",
    badgeText: "",
  },
  {
    id: 4,
    name: "Venly",
    image: "/assets/img/bg-img/venly.png",
    badgeText: "",
  }
]


const MyWalletArea = () => {
  return (
    <>
      <div className="create-new-button">
        <Link className="shadow-lg btn btn-warning" href="/create-new"
          data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT">
          <i className="fz-18 bi bi-plus-lg"></i>
        </Link>
      </div>
      <div className="admin-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h4 className="mb-3">Your current wallet</h4>
            </div>
            <div className="col-12 col-xl-7 col-xxl-6">
              <div className="card wallet-card shadow-sm">
                <div className="card-body px-4 text-center">
                  <div className="d-flex align-items-center">
                    <div className="img-wrap"><Image layout="fill" src="/assets/img/bg-img/metamask.png" alt="" /></div>
                    <h4 className="mb-0 me-3">Metamask</h4><a className="btn btn-sm btn-danger rounded-pill ms-auto" href="#">Change</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-12">
              <div className="text-center">
                <h4 className="mb-4 mt-5">Connect with one of our other available wallet providers.</h4>
              </div>
            </div>

            {wallet_data.map((item, i) => (
              <div key={i} className="col-12 col-xl-6">
                <div className="card wallet-card shadow-sm">
                  <div className="card-body px-4">
                    <div className="d-flex align-items-center">
                      <div className="img-wrap">
                        <Image layout="fill" src={item.image} alt="" />
                      </div>
                      <h4 className="mb-0 me-3">{item.name}
                        <span className="badge bg-danger rounded-pill align-top fz-12 ms-1">{item.badgeText}</span>
                      </h4>
                      <Link className="btn btn-sm btn-warning rounded-pill ms-auto" href="/login">
                        Connect
                        <i className="ms-1 bi bi-arrow-right"></i>
                      </Link>
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

export default MyWalletArea;