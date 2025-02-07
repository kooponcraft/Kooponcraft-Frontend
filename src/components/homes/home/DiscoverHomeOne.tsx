'use client'

import discover_data from '@/data/discover-nft';
import Link from 'next/link';
import AppImage from "@/components/common/AppImage";
import React, { useState } from 'react';
import { BsPalette, BsCardImage, BsStars, BsImage, BsCollection, BsThreeDotsVertical, BsShare, BsFlag, BsBookmark, BsCheck, BsGraphUp } from 'react-icons/bs';

// data
const categories = ["All", ...new Set(discover_data.map((item) => item.catagory))];
const perView = 12;

const DiscoverHomeOne = () => {

  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(discover_data);
  const [next, setNext] = useState(perView);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    setNext(perView);
    if (cateItem === "All") {
      return setItems(discover_data);
    } else {
      const findItems = discover_data.filter((findItem) => {
        return findItem.catagory == cateItem;
      });
      setItems(findItems);
    }
  };

  const handleLoadMore = () => {
    setNext((value) => value + 2);
  };

  const [active, setActive] = useState(null)
  const handleActive = (id: any) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  }

  return (
    <>
      <div className="discover-nft-wrapper">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/3">
              <div className="section-heading">
                <h2 className="mb-0">Discover</h2>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="filters-button-group flex justify-end flex-wrap">
                {categories.map((cate, i) => (
                  <React.Fragment key={i}>
                    <button
                      onClick={() => filterItems(cate)}
                      className={`btn btn-primary rounded-full btn-sm mb-3 mx-2 ${cate === activeCategory ? "active" : ""}`}
                    >
                      {cate === 'art' && <BsPalette className="text-lg mr-2" />}
                      {cate === 'cards' && <BsCardImage className="text-lg mr-2" />}
                      {cate === 'collectibles' && <BsStars className="text-lg mr-2" />}
                      {cate === 'photos' && <BsImage className="text-lg mr-2" />}
                      {cate === 'All' && <BsCollection className="text-lg mr-2" />}
                      {cate}
                    </button>{' '}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="flex flex-wrap -mx-4 kooponcraft-collection-filter-list">
                {items.slice(0, next).map((item, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 px-4 list-item cards">
                    <div className="nft-card card shadow-sm">
                      <div className="card-body">
                        <div className="img-wrap relative">
                          <AppImage src={item.image} alt="" />
                          <div className="badge bg-primary absolute top-0 left-0">
                            <AppImage src="/assets/img/core-img/fire.png" alt="" />Featured
                          </div>
                          <div className="dropdown">
                            <button
                              onClick={() => handleActive(item.id)}
                              className={`btn dropdown-toggle rounded-full shadow-sm ${active === item.id ? 'show' : ''}`}
                              id="dgd987"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <BsThreeDotsVertical />
                            </button>
                            <ul
                              className={`dropdown-menu dropdown-menu-end ${active === item.id ? 'show' : ''}`}
                              style={{
                                position: 'absolute',
                                inset: '0px 0px auto auto',
                                margin: '0px',
                                transform: 'translate(0px, 34px)',
                              }}
                              aria-labelledby="dgd987"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  <BsShare className="mr-1" />Share
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <BsFlag className="mr-1" />Report
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <BsBookmark className="mr-1" />Bookmark
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-center mt-3">
                          <div className="w-2/3">
                            <span className="block text-xs text-gray-500">
                              <i className={`bi ${item.topLevelInfo[0].icon}`} />
                              {item.topLevelInfo[0].text}
                            </span>
                          </div>
                          <div className="w-1/3 text-right">
                            <button className="wishlist-btn active" type="button">
                              <i className="bi"></i>
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="w-2/3">
                            <div className="name-info flex items-center">
                              <div className="author-img relative">
                                <AppImage className="shadow" src={item.authorAvater} alt="" />
                                <BsCheck className="absolute bg-success" />
                              </div>
                              <div className="name-author">
                                <Link
                                  className="name block hover:text-primary font-bold truncate"
                                  href="/item-details"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Monkey Arts #114"
                                >
                                  {item.title}
                                </Link>
                                <Link className="author block text-xs hover:text-primary truncate" href="/author">
                                  @ {item.authorName}
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3 text-right text-gray-500">
                            <div className="price">
                              <span className="text-xs block">{item.priceText}</span>
                              <h6 className="mb-0">{item.currentPrice}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center mt-3">
                          <div className="w-1/2">
                            <a className="btn btn-primary btn-sm rounded-full" href="#">
                              {item.buttonGroup[0].leftButtonText}
                            </a>
                          </div>
                          <div className="w-1/2 text-right">
                            <Link className="btn btn-minimal btn-sm hover:text-primary" href="/activity">
                              <BsGraphUp className="mr-1" />
                              {item.buttonGroup[1].rightButtonText}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverHomeOne;