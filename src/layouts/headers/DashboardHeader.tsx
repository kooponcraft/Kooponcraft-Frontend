
'use client'

import AppImage from "@/components/common/AppImage";
import Link from 'next/link';
import UseSticky from '@/hooks/UseSticky';
import React, { useEffect, useState } from 'react';
import Count from '@/components/common/Count';
import { logout } from "@/lib/auth/logout";
import { getUser } from "@/lib/auth/getUser";
import { getUserBalance } from "@/lib/getUserBalance";
import { usePathname } from "next/navigation";
import useTheme from "next-theme";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const AdminNav = [
  {
    id: 1,
    path: "/dashboard",
    icon: "bi-speedometer",
    text: "Dashboard"
  },
  {
    id: 2,
    path: "/my-transactions",
    icon: "bi-receipt",
    text: "My Transactions"
  },
  {
    id: 3,
    path: "/my-collections",
    icon: "bi-columns-gap",
    text: "My Collections",
    isAdmin: true // Add a flag to indicate this item should be hidden
  },
  {
    id: 4,
    path: "/my-tokens",
    icon: "bi-coin",
    text: "My Tokens"
  },
  {
    id: 5,
    path: "/my-wallet",
    icon: "bi-wallet2",
    text: "My Wallet"
  },
  {
    id: 6,
    path: "/my-store",
    icon: "bi-shop",
    text: "My Store",
    isAdmin: true // Add a flag to indicate this item should be hidden
  },
  // {
  //   id: 7,
  //   path: "/notifications",
  //   icon: "bi-bell",
  //   text: "Notifications"
  // },
  // {
  //   id: 8,
  //   path: "/settings",
  //   icon: "bi-gear",
  //   text: "Settings"
  // },
  // {
  //   id: 9,
  //   path: "live-bids",
  //   icon: "bi-clock-history",
  //   text: "Live Bids"
  // }
];

const DashboardHeader = () => {
  const { sticky } = UseSticky()
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [balance, setBalance] = useState<any>()
  const { theme, toggle } = useTheme()

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    (async () => {
      const user = await getUser()
      setUser(user)
      const balance = await getUserBalance()
      setBalance(balance)
    })()
  }, [])

  return (
    <>

      <header className={`header-area dashboard-header px-0 px-sm-0 ${sticky ? 'sticky-on' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="d-flex align-items-center">

              <Link href="/" className="admin-logo me-1 me-sm-3">
                <AppImage src="/assets/img/core-img/dashboard-logo.png" style={{width: 170}} alt="" />
              </Link>

              <div className="search-form position-relative d-flex align-items-center">
                <input className="form-control" type="text" placeholder="Search" />
                <button className="position-absolute" type="submit"><i className="bi bi-search"></i></button>
              </div>

            </div>

            <div className="header-meta d-flex align-items-center">
              <div
                className="fs-2 me-3"
                style={{ cursor: "pointer" }}
                onClick={toggle}
              >
                {theme == "light" ? (
                  <BsSunFill />
                ) : (
                  <BsMoonFill />
                )}
              </div>
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
                <AppImage src={user?.isAdmin ? "https://api.dicebear.com/6.x/identicon/svg?seed=default" : (user?.profileImageUrl || `https://api.dicebear.com/6.x/identicon/svg?seed=${encodeURIComponent(user?.username || "default")}`)} alt="" />
                <div className="ms-3">
                  <h6 className="lh-1 text-dark fz-18">{user?.username}</h6>
                  <span className="badge bg-primary fz-12">{user?.isAdmin ? "Store Owner": "Premium User"}</span>
                </div>
              </div>
            </div>

            {/* Balance */}
            <div className="card shadow mb-5">
              <div className="card-body text-center p-4">
                <h6 className="mb-1">Current Balance</h6>
                <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center">
                  {/* <AppImage className="me-1" src={`${balanceCard[0].icon}`} alt="" /> */}
                  {balance && balance.availableBalance && (
                    <span className="d-flex counter">
                          <Count number={parseFloat(parseFloat(balance.availableBalance.amount).toFixed(5).slice(0, parseFloat(balance.availableBalance.amount).toFixed(5).indexOf(".")))} />
                          .
                          <Count number={parseFloat(parseFloat(balance.availableBalance.amount).toFixed(5).slice(parseFloat(balance.availableBalance.amount).toFixed(5).indexOf(".") + 1))} />
                    </span>
                  )}
                  <span className="ms-2 text-danger">UNQ</span>
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
              {AdminNav.filter(({ isAdmin }) => !isAdmin || user?.isAdmin).map((elem, index) => (
                <li key={index}>
                  <Link href={elem.path} className={pathname === elem.path ? "active" : ""}>
                    <i className={`bi ${elem.icon}`} />
                    {elem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <hr className="my-4"/>
          <div>
            <div className="btn btn-sm btn-danger rounded-pill ms-2 ms-sm-3" onClick={logout}>
            <i className="bi bi-box-arrow-left me-1"></i>Logout</div>
          </div>

          <div className="mt-auto">
            <div className="mt-5" />
            {/* Copyright Text */}
            <div className="copywrite-text mt-4">
              <p className="mb-0 fz-14">{new Date().getFullYear()} © All rights reserved Kooponcraft</p>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default DashboardHeader;