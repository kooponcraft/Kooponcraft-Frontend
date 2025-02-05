
'use client'
import AppImage from "@/components/common/AppImage";

import blog_data from '@/data/blog-list';
import Link from 'next/link';
import React, { useState } from 'react';

const BlogArea = () => {

  const [count, setCount] = useState(9);
  const [noMorePost, setNoMorePost] = useState(false);
  const countSlice = blog_data.slice(0, count);

  const handleLoadMore = () => {
    setCount(count + 3);
    if (count >= blog_data.length) {
      setNoMorePost(true);
    }
  }


  return (
    <>
      <div className="blog-wrap">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-sm-7 col-lg-8 col-xxl-9">
              <div className="row g-4">
                {countSlice.map((item, i) => (
                  <div key={i} className="col-12 col-lg-6 col-xxl-4">
                    <div className="card blog-card border-0 bg-transparent bg-transparent">
                      <div className="img-wrap">
                        <Link href="/blog-details">
                          <AppImage src={item.image} alt="" />
                        </Link>
                      </div>
                      <div className="card-body p-3">
                        <Link className="post-title mb-2 hover-primary" href="/blog-details">
                          {item.title}
                        </Link>
                        <p className="mb-4" style={{ color: '#8084AE' }}>
                          {item.excerpt}
                        </p>
                        <Link className="btn btn-primary btn-sm rounded-pill" href="/blog-details">
                          Read more<i className="ms-1 bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}


              </div>

              {noMorePost ? (
                <div className="container">
                  <div className="text-center mt-70">
                    <button
                      onClick={() => handleLoadMore()}
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      No Items Here<i className="ms-1 bi bi-arrow-repeat"></i>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="container">
                  <div className="text-center mt-70">
                    <button
                      onClick={() => handleLoadMore()}
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      View More Items<i className="ms-1 bi bi-arrow-repeat"></i>
                    </button>
                  </div>
                </div>
              )}


            </div>
            <div className="col-12 col-sm-5 col-lg-4 col-xxl-3">
              <h4 className="mb-2">Popular News</h4>
              <div className="border-top mb-4"></div>

              {blog_data.slice(0, 6).map((item, i) => (
                <div key={i} className="popular-blog">
                  <Link className="post-title mb-2" href="/blog-details">
                    <span>{item.id}</span>
                <h5 className="hover-primary">
                 {item.title}
                  </h5>
                  </Link>
                <p>
                  {item.excerpt}
                  </p>
                  <Link className="btn btn-minimal text-start hover-primary" href="/blog-details">
                    Continue Reading <i className="ms-1 bi bi-arrow-right"></i>
                  </Link>
              </div>
              ))} 

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;