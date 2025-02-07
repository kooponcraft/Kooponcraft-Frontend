'use client'

import AppImage from "@/components/common/AppImage";
import UseSticky from '@/hooks/UseSticky';
import Link from 'next/link';
import NavMenu from './NavMenu';
import MobileMenus from './mobile-menus';
import React, { useCallback, useEffect, useState } from 'react';
import { BsGrid, BsSearch, BsThreeDots, BsSpeedometer2, BsCollection, BsBell, BsGear } from 'react-icons/bs';

const HeaderOne = () => {

  const {sticky} = UseSticky()
  const [openMenu, setOpenMenu] = useState(false) 

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 990) {
      setOpenMenu(false);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <>

      <header className={`header-area ${sticky ? 'sticky-on' : ''} ${openMenu? 'mobile-menu-open' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container flex justify-between items-center">

            <Link className="navbar-brand" href="/">
              <AppImage className="light-logo" src="/assets/img/core-img/logo.png" alt="" />
              <AppImage className="dark-logo" src="/assets/img/core-img/logo-white.png" alt="" />
            </Link>

            <button onClick={() => setOpenMenu(!openMenu)} className="navbar-toggler lg:hidden" type="button" aria-controls="kooponcraftNav" aria-expanded="false" aria-label="Toggle navigation">
              <BsGrid className="text-xl" />
            </button>
            {openMenu && 
              <MobileMenus openMenu={openMenu} setOpenMenu={setOpenMenu} />
            }

            <div className="hidden xl:flex items-center justify-between w-full" id="kooponcraftNav">
              <NavMenu />

              <div className="header-meta flex items-center ml-auto">

                <div className="search-form relative flex items-center">
                  <input className="form-control" type="text" placeholder="Search" />
                  <button className="absolute right-0" type="submit"><BsSearch /></button>
                </div>

                <div className="user-dropdown dropdown mx-3 relative">
                  <button className="btn dropdown-toggle user-btn" id="dropdownMenuButton1" type="button" aria-expanded="false"><BsThreeDots /></button>
                  <ul className="dropdown-menu mt-3 absolute right-0" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item flex items-center" href="/dashboard"><BsSpeedometer2 className="mr-2" />Dashboard</Link></li>
                    <li><Link className="dropdown-item flex items-center" href="/my-collection"><BsCollection className="mr-2" />Collections</Link></li>
                    <li><Link className="dropdown-item flex items-center" href="/notifications"><BsBell className="mr-2" />Notifications</Link></li>
                    <li><Link className="dropdown-item flex items-center" href="/settings"><BsGear className="mr-2" />Settings</Link></li>
                  </ul>
                </div>

                <Link className="btn btn-warning btn-sm rounded-pill bg-yellow-300" href="/create-new">Create</Link>

              </div>
            </div>

          </div>
        </nav>
      </header>

    </>
  );
};

export default HeaderOne;
