
'use client'

import AppImage from "@/components/common/AppImage";
import discover_data from '@/data/discover-nft';
import Link from 'next/link';
import React, { useState } from 'react';

// data
const categories = ["All", ...new Set(discover_data.map((item) => item.catagory))];
const perView = 12;

const DiscoverHomeOne = () => {


  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(discover_data);
  const [next, setNext] = useState(perView);

  const filterItems = ( cateItem: string ) => {
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
  //   handleLoadMore
  const handleLoadMore = () => {
  	setNext((value) => value + 2);
  };


  const [active, setActive] = useState(null)
  // handleActive function 
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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <div className="section-heading">
                <h2 className="mb-0">Discover</h2>
              </div>
            </div>
            <div className="col-12 col-md-8"> 

                <div className="filters-button-group d-flex justify-content-md-end flex-wrap"> 
                {categories.map((cate, i) => (
									<React.Fragment key={i}>
										<button
											onClick={() => filterItems(cate)}
											className={`btn btn-primary rounded-pill btn-sm mb-3 mx-2 ${cate === activeCategory ? "active" : ""}`}
										> 
                     {cate === 'art' && <i className="fz-16 bi bi-palette me-2" /> }
                     {cate === 'cards' && <i className="fz-16 bi bi-card-image me-2" /> }
                     {cate === 'collectibles' && <i className="fz-16 bi bi-list-stars me-2" /> }
                     {cate === 'photos' && <i className="fz-16 bi bi-image me-2" /> } 
                     {cate === 'All' &&  <i className="fz-16 bi bi-collection me-2" /> } 
                      
                    {cate} 
										</button>  {' '}
									</React.Fragment>
								))}
              
                </div>


            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row g-4 kooponcraft-collection-filter-list">

                {items.slice(0, next).map((item, index) => (
                   <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3 list-item cards">
                   <div className="nft-card card shadow-sm">
                     <div className="card-body">
                       <div className="img-wrap"><AppImage src={item.image} alt="" />
 
                         <div className="badge bg-primary position-absolute"><AppImage src="/assets/img/core-img/fire.png" alt="" />Featured</div>
 
                         <div className="dropdown">
                           <button 
                           onClick={() => handleActive(item.id)}
                           className={`btn dropdown-toggle rounded-pill shadow-sm ${active === item.id ? 'show' : ''}`} id="dgd987" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
 
                           <ul className={`dropdown-menu dropdown-menu-end ${active === item.id ? 'show' : ''}`} 
                           style={{
                            position: 'absolute', 
                            inset: '0px 0px auto auto',
                            margin: '0px',
                            transform: 'translate(0px, 34px)',
                          }}
                           aria-labelledby="dgd987">
                             <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                             <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                             <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                           </ul>
                         </div>
                       </div>
 
                       <div className="row gx-2 align-items-center mt-3">
                         <div className="col-8">
                          <span className="d-block fz-12" style={{color: '#8480AE'}}>
                          <i className={`bi ${item.topLevelInfo[0].icon}`} />
                           {item.topLevelInfo[0].text}
                            </span>
                          </div>
                         <div className="col-4 text-end">
                           <button className="wishlist-btn active" type="button">
                            <i className="bi"></i>
                            </button>
                         </div>
                       </div>
 
                       <div className="row gx-2 align-items-center mt-2">
                         <div className="col-8">
                           <div className="name-info d-flex align-items-center">
                             <div className="author-img position-relative">
                              <AppImage className="shadow" src={item.authorAvater} alt="" />
                              <i className="bi bi-check position-absolute bg-success"></i>
                              </div>
                             <div className="name-author">
                              <Link className="name d-block hover-primary fw-bold text-truncate" 
                              href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">{item.title}</Link>
                              <Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@ {item.authorName}</Link></div>
                           </div>
                         </div>
                         <div className="col-4" style={{color: '#8084AE'}}>
                           <div className="price text-end">
                            <span className="fz-12 d-block">{item.priceText}</span>
                             <h6 className="mb-0">{item.currentPrice}</h6>
                           </div>
                         </div>
                       </div>
 
                       <div className="row gx-2 align-items-center mt-3">
                         <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">{item.buttonGroup[0].leftButtonText}</a></div>
                         <div className="col-6 text-end"><Link className="btn btn-minimal btn-sm hover-primary" href="/activity"> <i className="bi bi-activity me-1"></i>{item.buttonGroup[1].rightButtonText}</Link></div>
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