'use client'

import UseSticky from '@/hooks/UseSticky';
import Link from 'next/link';
import NavMenu from './NavMenu';
import MobileMenus from './mobile-menus';
import React, { useCallback, useEffect, useState } from 'react';

import light_logo from "/assets/img/core-img/logo.png";
import dark_logo from "/assets/img/core-img/logo-white.png";
import AppImage from '@/components/common/AppImage';
import { getUser } from '@/lib/auth/getUser';
import menu_data from './MenuData';
import { logout } from '@/lib/auth/logout';
import { getStores } from '@/lib/getStores';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import useTheme from 'next-theme';


const HeaderOne = () => {

  const {sticky} = UseSticky()
  const [openMenu, setOpenMenu] = useState(false)
  const [user, setUser] = useState<User | null>(null);
  const [filteredMenuData, setFilteredMenuData] = useState(menu_data);
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
      const filteredData = await Promise.all(
        menu_data.filter((item) =>
          fetchedUser
            ? item.isAuthenticated === true || item.isAuthenticated === undefined
            : item.isAuthenticated === false || item.isAuthenticated === undefined
        ).map(async (item) => {
          if(!fetchedUser) return item;
          const stores = await getStores();
          if (item.id === 8) {
            item.sub_menus = stores.length < 1 ? [{
              title: "No Stores Available",
              link: "#"
            }] : stores.map((store: any) => ({
              title: store.username,
              link: `/store/${store.username.split(" ")[0].toLowerCase()}`,
            }));
          }
          return item;
        })
      );
      setFilteredMenuData(filteredData);
  };

    fetchData();
  }, []);

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

            <Link className="navbar-brand" style={{width: "170px"}} href="/">
              <AppImage className="light-logo" src="/assets/img/core-img/logo-white.png" alt="" />
              <AppImage className="dark-logo" src="/assets/img/core-img/logo-white.png" alt="" />

            </Link>

            <button onClick={() => setOpenMenu(!openMenu)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#kooponcraftNav" aria-controls="kooponcraftNav" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-grid"></i>
            </button>
            {openMenu && 
            <MobileMenus openMenu={openMenu} setOpenMenu={setOpenMenu} filteredMenuData={filteredMenuData} user={user}/>
            }


            <div className="collapse navbar-collapse d-none d-xl-block" id="kooponcraftNav">
              <NavMenu filteredMenuData={filteredMenuData}/>

              <div className="header-meta d-flex align-items-center ms-lg-auto">

                {/* search bar */}
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

                {
                  user ? (
                    <>
                        {/* STREAK */}
                        {/* <div className="position-relative">
                          <AppImage
                            src="/assets/img/core-img/fire.png"
                            alt="streak icon"
                            width={40}
                            height={40}
                          />
                          <span className="position-absolute start-50 text-white translate-middle-x" style={{ fontSize: 20, fontWeight: 700, bottom: 2 }}>
                            {user.currentStreak}
                          </span>
                        </div> */}
                      <div className="position-relative ms-3">
                        <span className="position-absolute rounded-pill bg-danger text-white px-1" style={{fontSize: 12, top: -5, left: -5}}>{user.points}</span>
                        <AppImage src='/assets/img/core-img/coins.png' alt='coins image' width={40} height={40} />
                      </div>
                      <button
                        className="btn btn-danger btn-sm rounded-pill ms-3"
                        onClick={logout}
                      >
                          Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link className="btn btn-outline-warning btn-sm rounded-pill" href="/login">Login</Link>
                      <Link className="btn btn-warning btn-sm rounded-pill ms-2" href="/register" style={{ textWrap: "nowrap" }}>Get Started</Link>
                    </>
                  )

                }

              </div>
            </div>


          </div>
        </nav>
      </header>

      
    </>
  );
};

export default HeaderOne;