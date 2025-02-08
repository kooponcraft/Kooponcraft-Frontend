
'use client'

import AppImage from "@/components/common/AppImage";
import Link from 'next/link';
import UseSticky from '@/hooks/UseSticky';
import React, { useState } from 'react';
import Count from '@/components/common/Count';



const userInfo = [
  {
    thumbnail: "img/bg-img/u2.jpg",
    username: "Designing W.",
    userType: "Premium User"
  }
]

const balanceCard = [
  {
    title: "Current balance",
    icon: "/assets/img/core-img/ethereum.png",
    balance: 40678,
    balanceType: "ETH"
  }
]

const AdminNav = [
  {
    id: 1,
    path: "/dashboard",
    icon: "bi-speedometer",
    text: "Dashboard"
  },
  {
    id: 2,
    path: "/live-bids",
    icon: "bi-hammer",
    text: "Live Bids"
  },
  {
    id: 3,
    path: "/my-collection",
    icon: "bi-columns-gap",
    text: "My Collections"
  },
  {
    id: 4,
    path: "/my-wallet",
    icon: "bi-wallet2",
    text: "My Wallet"
  },
  {
    id: 5,
    path: "/notifications",
    icon: "bi-bell",
    text: "Notifications"
  },
  {
    id: 6,
    path: "/settings",
    icon: "bi-gear",
    text: "Settings"
  }
]

const DashboardHeader = () => {
  const { sticky } = UseSticky()

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const [userActive, setUserActive] = useState(false);
  const handleUserToggle = () => {
    setUserActive(!userActive);
  }

  return (
    <>

      <header className={`header-area dashboard-header px-0 px-sm-0 ${sticky ? 'sticky-on' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="d-flex align-items-center">

              <div className="admin-logo me-1 me-sm-3">
                <AppImage src="/assets/img/core-img/dashboard-logo.png" alt="" />
              </div>

              <div className="search-form position-relative d-flex align-items-center">
                <input className="form-control" type="text" placeholder="Search" />
                <button className="position-absolute" type="submit"><i className="bi bi-search"></i></button>
              </div>
            </div>

            <div className="header-meta d-flex align-items-center">

              <div className="user-dropdown dropdown mx-2 mx-sm-3">
                <button className="btn dropdown-toggle user-btn" id="dd10" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <AppImage src="/assets/img/core-img/notification.png" alt="" />
                </button>
                <ul className="dropdown-menu noti-dd-menu dropdown-menu-end mt-3" aria-labelledby="dd10">
                  <li><a className="dropdown-item" href="#"><i className="me-2 bi bi-percent"></i>You have an offer!</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bg-info me-2 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bg-danger me-2 bi bi-gift"></i>January freebies have arrived.</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bg-warning me-2 bi bi-star"></i>A new rating has been received.</a></li>
                  <li><Link className="dropdown-item justify-content-center" href="/notifications">View all notifications</Link></li>
                </ul>
              </div>

              <div className="user-dropdown dropdown">

                <button onClick={handleUserToggle} className={`btn dropdown-toggle user-btn ${userActive ? 'show' : ''}`} id="dd20" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <AppImage src="/assets/img/core-img/user.png" alt="" />
                </button>

                <ul className={`dropdown-menu dropdown-menu-end mt-3 ${userActive ? 'show' : ''}`} aria-labelledby="dd20">
                  <li><Link className="dropdown-item" href="/dashboard"><i className="me-2 bi bi-person-circle"></i>Dashboard</Link></li>
                  <li><Link className="dropdown-item" href="/live-bids"><i className="me-2 bi bi-hammer"></i>My bids</Link></li>
                  <li><Link className="dropdown-item" href="/my-collection"><i className="me-2 bi bi-collection"></i>Collection</Link></li>
                  <li><Link className="dropdown-item" href="/settings"><i className="me-2 bi bi-gear"></i>Settings</Link></li>
                </ul>
              </div>

              <Link className="btn btn-sm btn-danger rounded-pill ms-2 ms-sm-3 d-none d-sm-block" href="/">
                <i className="bi bi-eye me-1"></i>Frontend</Link>

              <div onClick={handleToggle} className="menu-toggler ms-2 ms-sm-3" id="dashboardMenuTrigger">
                <i className="bi bi-list"></i>
              </div>

            </div>
          </div>
        </nav>
      </header>

      <div className={`admin-sidebar-wrap ${isActive ? "sidebar-active" : "sidebar-disabled"}`} >
        <div className="overflowY-scroll">
          {/* User Profile */}
          <div className="user-profile">
            {/* User Name */}
            <div className="user-name mb-5">
              <div className="d-flex align-items-center">
                <AppImage src="/assets/img/bg-img/u2.jpg" alt="" />
                <div className="ms-3">
                  <h6 className="lh-1 text-dark fz-18">{userInfo[0].username}</h6>
                  <span className="badge bg-primary fz-12">{userInfo[0].userType}</span>
                </div>
              </div>
            </div>

            {/* Balance */}
            <div className="card shadow mb-5">
              <div className="card-body text-center p-4">
                <h6 className="mb-1">{balanceCard[0].title}</h6>
                <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center">
                  <AppImage className="me-1" src={`${balanceCard[0].icon}`} alt="" />
                  <span className="counter">
                    <Count number={balanceCard[0].balance} /></span>
                  <span className="ms-2">{balanceCard[0].balanceType}</span>
                </h5>

                {/* Recharge Button */}
                <Link
                  className="btn btn-warning rounded-pill btn-sm w-100 mt-3"
                  href="#"
                >
                  Recharge
                </Link>
              </div>
            </div>
          </div>

          {/* Sidenav */}
          <div className="sidenav">
            <ul>
              <li>Menu</li>
              {AdminNav.map((elem, index) => (
                <li key={index}>
                  <Link href={elem.path} >
                    <i className={`bi ${elem.icon}`} />
                    {elem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <div className="mt-5" />
            {/* Copyright Text */}
            <div className="copywrite-text mt-4">
              <p className="mb-0 fz-14">{new Date().getFullYear()} © All rights reserved by
                <a className="fz-14 ms-1" rel="noreferrer"
                  href="https://themeforest.net/user/rk_theme/portfolio" target="_blank">rk_theme</a>
              </p>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default DashboardHeader;