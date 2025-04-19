'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import AppImage from "@/components/common/AppImage";
import { getUser } from '@/lib/auth/getUser';
import { Toast, ToastContainer } from 'react-bootstrap';

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
  const [user, setUser] = React.useState<User | null>(null);
  const [toast, setToast] = React.useState({
    show: false,
    message: "",
    bg: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, [])
  const handleCopy = () => {
    if (user) {
      navigator.clipboard.writeText(user.accountAddress).then(() => {
        setToast({
          show: true,
          message: "Wallet address copied to clipboard!",
          bg: "success",
        });
      }).catch(err => {
        console.error('Failed to copy: ', err);
        setToast({
          show: true,
          message: "Failed to copy wallet address.",
          bg: "danger",
        });
      });
    }
  }

  return (
    <>
      <div className="create-new-button">
        <Link className="shadow-lg btn btn-warning" href="/collection/create"
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
                      <div className="img-wrap"><AppImage src="/assets/img/unique_network_cover.jpeg" alt="" /></div>

                      <h4 className="mb-0 me-3">UNQ Wallet Address</h4>
                      <button className="btn btn-sm btn-warning rounded-pill ms-auto" id="copyButton" onClick={handleCopy}>Copy</button>
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
                        <AppImage src={item.image} width={70} alt="" />
                      </div>
                      <h4 className="mb-0 me-3">{item.name}
                        <span className="badge bg-danger rounded-pill align-top fz-12 ms-1">{item.badgeText}</span>
                      </h4>
                      <Link className="btn btn-sm btn-warning rounded-pill ms-auto" href="#">
                        Coming Soon
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
      <ToastContainer position='top-end' className="p-3" style={{ zIndex: 9999 }}>
        <Toast show={toast.show} onClose={() => setToast({ ...toast, show: false })} bg={toast.bg}>
          <Toast.Body className='text-white'>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default MyWalletArea;