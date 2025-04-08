"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import menu_data from "./MenuData";
import { logout } from "@/lib/auth/logout";
import AppImage from "@/components/common/AppImage";

interface MobileMenusProps {
  setOpenMenu: (value: boolean) => void;
  openMenu: boolean;
  filteredMenuData: typeof menu_data;
  user: any;
}

const MobileMenus: React.FC<MobileMenusProps> = ({ setOpenMenu, openMenu, filteredMenuData, user }) => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };


  const [navTitle2, setNavTitle2] = useState("");
  //openMobileMenu
  const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };


  return (
    <>
      <div className={`navbar-collapse collapse ${openMenu ? 'show' : ''}`} id="kooponcraftNav">
        <ul className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
          {filteredMenuData.map((item, i) => (
            <li key={i} className={`${item.has_dropdown ? 'ft-dd' : ''}`} onClick={() => openMobileMenu(item.title)}>
              <Link href={item.link}>{item.title}</Link>
              {item.has_dropdown &&
                <>
                  <div className="dropdown-toggler">
                    <i className="bi bi-caret-down-fill"></i>
                  </div>
                  <ul className="ft-dd-menu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                    {item.sub_menus?.map((submenu, index) => (
                      <React.Fragment key={index}>

                        <li className={`${submenu.inner_has_dropdown ? 'ft-dd' : ''}`} onClick={() => openMobileMenu2(submenu.title)}>
                          {submenu.title === "No Stores Available" ? (
                            <span className="px-2">{submenu.title}</span>
                          ) : (
                            <>
                              <Link href={submenu.link}>{submenu.title}</Link>
                              {submenu.inner_has_dropdown && (
                                <>
                                  <div className="dropdown-toggler">
                                    <i className="bi bi-caret-down-fill"></i>
                                  </div>
                                  <ul
                                    className="ft-dd-menu"
                                    style={{
                                      display: navTitle2 === submenu.title ? "block" : "none",
                                    }}
                                  >
                                    {submenu.inner_sub?.map((sub_item, sub_index) => (
                                      <li key={sub_index}>
                                        <Link href={sub_item.link}>{sub_item.title}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              )}
                            </>
                          )}
                        </li>
                      </React.Fragment>
                    ))}

                  </ul>
                </>
              }
            </li>
          ))}
           
        </ul>

        <div className="header-meta d-flex align-items-center ms-lg-auto">

          {/* <div className="search-form position-relative d-flex align-items-center">
            <input className="form-control" type="text" placeholder="Search" />
            <button className="position-absolute" type="submit"><i className="bi bi-search"></i></button>
          </div> */}

            {/* {
              user && (
                <div className="user-dropdown dropdown mx-3">
                  <button className="btn dropdown-toggle user-btn" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots"></i></button>
                  <ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" href="/dashboard"><i className="me-2 bi bi-speedometer2"></i>Dashboard</Link></li>
                    <li><Link className="dropdown-item" href="/my-collection"><i className="me-2 bi bi-collection"></i>Collections</Link></li>
                    <li><Link className="dropdown-item" href="/notifications"><i className="me-2 bi bi-bell"></i>Notifications</Link></li>
                    <li><Link className="dropdown-item" href="/settings"><i className="me-2 bi bi-gear"></i>Settings</Link></li>
                  </ul>
                </div>
              )
            } */}

            {
              user ? (
                <div className="d-flex align-items-center justify-content-between w-100">
                  <div className="position-relative" style={{left: 10}}>
                    <span className="position-absolute rounded-pill bg-danger text-white px-1" style={{ fontSize: 12, top: -5, left: -5 }}>{user.points}</span>
                    <AppImage src='/assets/img/core-img/coins.png' alt='coins image' width={40} height={40} />
                  </div>
                  <button
                    className="btn btn-danger btn-sm rounded-pill"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="d-flex flex-column gap-2 align-items-stretch w-100">
                  <Link className="btn btn-outline-warning btn-sm rounded-pill" href="/login">Login</Link>
                  <Link className="btn btn-warning btn-sm rounded-pill" href="/register">Get Started</Link>
                </div>
              )

            }
        </div>

      </div>
    </>
  );
};

export default MobileMenus;



