"use client"
import React, { useState } from "react";
// internal  
import Link from "next/link";
import AppImage from "@/components/common/AppImage";
import menu_data from "./MenuData";
import { BsCaretDownFill, BsSearch, BsThreeDots, BsSpeedometer2, BsCollection, BsBell, BsGear } from "react-icons/bs";

const MobileMenus = ({ setOpenMenu, openMenu }: any) => {
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
      <div className={`collapse ${openMenu ? 'block' : 'hidden'}`} id="kooponcraftNav">
        <ul className="my-2 lg:my-0">
          {menu_data.map((item, i) => (
            <li key={i} className={`${item.has_dropdown ? 'relative' : ''}`} onClick={() => openMobileMenu(item.title)}>
              <Link href={item.link}>{item.title}</Link>
              {item.has_dropdown &&
                <>
                  <div className="cursor-pointer">
                    <BsCaretDownFill />
                  </div>
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg" style={{ display: navTitle === item.title ? "block" : "none", }}>
                    {item.sub_menus?.map((submenu, index) => (
                      <React.Fragment key={index}>
                        <li className={`${submenu.inner_has_dropdown ? 'relative' : ''}`} onClick={() => openMobileMenu2(submenu.title)}>
                          <Link href={submenu.link}>{submenu.title}</Link>
                          {submenu.inner_has_dropdown &&
                            <>
                              <div className="cursor-pointer">
                                <BsCaretDownFill />
                              </div>
                              <ul className="absolute left-0 mt-2 bg-white shadow-lg" style={{ display: navTitle2 === submenu.title ? "block" : "none", }}>
                                {submenu.inner_sub?.map((sub_item, sub_index) => (
                                  <li key={sub_index}><Link href={sub_item.link}>{sub_item.title}</Link></li>
                                ))}
                              </ul>
                            </>
                          }
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </>
              }
            </li>
          ))}
        </ul>

        <div className="flex items-center lg:ms-auto">
          <div className="relative flex items-center">
            <input className="form-control" type="text" placeholder="Search" />
            <button className="absolute right-0" type="submit"><BsSearch /></button>
          </div>

          <div className="relative mx-3">
            <button className="btn" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false"><BsThreeDots /></button>
            <ul className="absolute mt-3 bg-white shadow-lg" aria-labelledby="dropdownMenuButton1">
              <li><Link className="dropdown-item" href="/dashboard"><BsSpeedometer2 className="mr-2" />Dashboard</Link></li>
              <li><Link className="dropdown-item" href="/my-collection"><BsCollection className="mr-2" />Collections</Link></li>
              <li><Link className="dropdown-item" href="/notifications"><BsBell className="mr-2" />Notifications</Link></li>
              <li><Link className="dropdown-item" href="/settings"><BsGear className="mr-2" />Settings</Link></li>
            </ul>
          </div>

          <Link className="btn btn-warning btn-sm rounded-pill" href="/create-new">Create</Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenus;
