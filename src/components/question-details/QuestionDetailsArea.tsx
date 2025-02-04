

import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import help_all_questions from '@/data/help-all-questions';

const QuestionDetailsArea = () => {
  const popular = help_all_questions.filter(item => item.catagory === 'popular')

  return (
    <>
      <div className="help-center-wrapper">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-8">
              <h2 className="mb-4 fw-bold display-6">How can I stay safe and protect my NFTs?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt fuga officia optio vero possimus molestiae voluptatibus nemo assumenda dolores veritatis consequatur provident error suscipit officiis, quo, ut corrupti sequi quos!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, deleniti expedita, obcaecati repudiandae, saepe quibusdam unde officia tenetur mollitia commodi illo non voluptas consequuntur quod dolorem itaque esse exercitationem ab?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti dignissimos vitae neque velit porro sunt ratione enim. Cupiditate corrupti consequatur officiis quae, ducimus sint ipsum quod! Porro, distinctio obcaecati!</p><Image layout="fill" className="my-3 rounded" src="/assets/img/bg-img/44.jpg" alt="" data-action="zoom" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ipsum porro facere praesentium dolorum nesciunt ratione error omnis, corrupti saepe aspernatur. Cum quia corrupti quasi, fuga ipsa iste ab possimus.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quibusdam, nisi blanditiis dolore suscipit molestiae dicta. Rem unde deserunt ratione iste, ex, perferendis odio voluptates aliquam, tempore debitis quos sed.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum, quam, odit distinctio nesciunt aliquid mollitia soluta consectetur assumenda fugiat non doloribus? Perspiciatis harum, excepturi sequi facilis beatae nostrum vitae.</p>
              <div className="border-top my-5"></div>
              <div className="helpful-wrapper text-center">
                <p>Was this article helpful?</p>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <a className="btn btn-primary btn-sm rounded-pill mx-2" href="#">
                    <i className="me-1 bi bi-hand-thumbs-up"></i>
                    Yes
                  </a>
                  <a className="btn btn-danger btn-sm rounded-pill mx-2" href="#">
                    <i className="me-1 bi bi-hand-thumbs-down"></i>
                    No
                  </a>
                </div>
                <p className="mb-0">87 out of 99 found this helpful</p>
              </div>
              <div className="card mt-5 bg-warning border-0">
                <div className="card-body p-4">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <h6 className="my-2 text-dark">Have more questions?</h6>
                    <Link className="my-2 btn btn-sm btn-dark rounded-pill" href="/contact">
                      Submit a request
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card bg-gray border-0 mt-2">
                <div className="card-body p-4">
                  <h4 className="mb-3">Related Questions</h4>
                  <div className="border-top mb-3"></div>
                  {popular.map((item, i) => (
                    <Link key={i} className="d-block fz-16 hover-primary mt-3" href="/question-details">
                      {item.question}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionDetailsArea;