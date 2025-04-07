import AppImage from '@/components/common/AppImage';
import Link from 'next/link';
import React from 'react'

const ExploreCategeries = () => {
    const categories = [
        {
            id: 1,
            name: "Pizza",
            images: [
                "/assets/img/pizza1.webp",
                "/assets/img/pizza4.jpg",
                "/assets/img/pizza5.webp"
            ],
        },
        {
            id: 2,
            name: "Coffee",
            images: [
                "/assets/img/coffe1.jpg",
                "/assets/img/coffee-10.gif",
                "/assets/img/coffee-gif-6.gif"
            ],
        },
        {
            id: 3,
            name: "Delivery Service",
            images: [
                "/assets/img/delivery-2.gif",
                "/assets/img/delivery3.jpg",
                "/assets/img/delivery-man.gif",
                "/assets/img/delivery4.jpg"
            ],
        }
    ];
  return (
      <>
        <div>
          <div className="container">
            <div className="row">
                <div className="section-heading">
                  <h2 className="mb-0 ms-2">Explore Categories</h2>
                </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 justify-content-center">
              {categories.map(({ id, name, images }: any) => (
                <div className="col-12 col-md-10 col-lg-4" key={id}>
                    <div className="catagory-card card shadow-sm h-100">
                    <div className="card-body">
                        <div className="d-grid gap-1" style={{ gridTemplateColumns: "repeat(2, 1fr)", minHeight: 365 }}>
                            {
                              images.map((image: string, idx: number) => (
                                <AppImage 
                                  key={idx}
                                  className="rounded w-100 h-100" 
                                  src={image} 
                                  alt=""
                                  style={(images.length === 3 && idx === 2) 
                                  ? { gridColumnStart: 2, gridRowStart: 1, gridRowEnd: "span 2" } 
                                  : { }}
                                  unoptimized={image.includes("webp")}
                                />
                              ))
                            }
                        </div>
                        <div className="row mt-3">
                        <div className="col-8">
                            <h5 className="mb-0">{name}</h5>
                        </div>
                        <div className="col-4 text-end">
                            <Link className="btn btn-minimal hover-primary view-all-category" href="#">
                                View all<i className="ms-1 fz-14 bi bi-arrow-right"></i>
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
  
  
  
      </>
    );
}

export default ExploreCategeries