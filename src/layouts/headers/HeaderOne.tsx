'use client'

import UseSticky from '@/hooks/UseSticky';
import Link from 'next/link';
import NavMenu from './NavMenu';
import MobileMenus from './mobile-menus';
import React, { useCallback, useEffect, useState } from 'react';

import light_logo from "/assets/img/core-img/logo.png";
import dark_logo from "/assets/img/core-img/logo-white.png";
import AppImage from '@/components/common/AppImage';


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

  if(typeof window !== 'undefined') {
    require('bootstrap/dist/js/bootstrap');
  }


  return (
    <>

      <header className={`header-area ${sticky ? 'sticky-on' : ''} ${openMenu? 'mobile-menu-open' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">

            <Link className="navbar-brand" href="/">
              <AppImage className="light-logo" src="/assets/img/core-img/logo.png" alt="" />
              <AppImage className="dark-logo" src="/assets/img/core-img/logo-white.png" alt="" />

            </Link>

            <button onClick={() => setOpenMenu(!openMenu)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#funtoNav" aria-controls="funtoNav" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-grid"></i>
            </button>
            {openMenu && 
            <MobileMenus openMenu={openMenu} setOpenMenu={setOpenMenu} />
            }


            <div className="collapse navbar-collapse d-none d-xl-block" id="funtoNav">
              <NavMenu />

              <div className="header-meta d-flex align-items-center ms-lg-auto">

                <div className="search-form position-relative d-flex align-items-center">
                  <input className="form-control" type="text" placeholder="Search" />
                  <button className="position-absolute" type="submit"><i className="bi bi-search"></i></button>
                </div>

                <div className="user-dropdown dropdown mx-3">
                  <button className="btn dropdown-toggle user-btn" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots"></i></button>
                  <ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" href="/dashboard"><i className="me-2 bi bi-speedometer2"></i>Dashboard</Link></li>
                    <li><Link className="dropdown-item" href="/my-collection"><i className="me-2 bi bi-collection"></i>Collections</Link></li>
                    <li><Link className="dropdown-item" href="/notifications"><i className="me-2 bi bi-bell"></i>Notifications</Link></li>
                    <li><Link className="dropdown-item" href="/settings"><i className="me-2 bi bi-gear"></i>Settings</Link></li>
                  </ul>
                </div>

                <Link className="btn btn-warning btn-sm rounded-pill" href="/create-new">Create</Link>

              </div>
            </div>


          </div>
        </nav>
      </header>

      
    </>
  );
};

export default HeaderOne;