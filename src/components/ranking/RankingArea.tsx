
'use client'

import NiceSelect from '@/ui/NiceSelect';
import React from 'react';

const RankingArea = () => {

  const selectHandler = (e: any) => { }; 

  return (
    <>
      <div className="activity-wrapper">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-12 col-sm-6 col-lg-3">
            <form onSubmit={(e) => e.preventDefault()}> 
              <input className="form-control" type="search" placeholder="Search" />
            </form>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
             
            <NiceSelect
								className="filter-select bg-gray w-100 d-flex align-items-center"
								options={[
									{ value: "All", text: "All Time" },
									{ value: "01", text: "Last 1 Day" },
									{ value: "02", text: "Last 7 Days" },
									{ value: "03", text: "Last 15 Days" },
									{ value: "04", text: "Last 1 Month" },
									{ value: "05", text: "Last 1 Year" }, 
								]}
								defaultCurrent={0}
								onChange={selectHandler}
								placeholder="Select an option"
								name="myNiceSelect"
							/>


          </div>
        </div>
      </div>
      <div className="mt-4 d-block w-100"></div>
      <div className="container">
        <div className="table-responsive border shadow-sm ranking-table mb-70 item_table">
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Title</th>
                <th scope="col">Base Price</th>
                <th scope="col">
                   Last 1 Day<i className="ms-1 bi bi-arrow-down-up"></i></th>
                <th scope="col">
                   7 Days<i className="ms-1 bi bi-arrow-down-up"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">#1</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Monkey Arts</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>4035</span></td>
                <td><span className="text-success">+1.065%</span></td>
                <td><span className="text-danger">-0.75%</span></td>
              </tr>
              <tr>
                <th scope="row">#2</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Kings with Bitcoin</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>3978</span></td>
                <td><span className="text-success">+1.065%</span></td>
                <td><span className="text-success">+0.75%</span></td>
              </tr>
              <tr>
                <th scope="row">#3</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Pixel Plane</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>3245</span></td>
                <td><span className="text-danger">-1.065%</span></td>
                <td><span className="text-danger">-0.75%</span></td>
              </tr>
              <tr>
                <th scope="row">#4</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Macaw Bird</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>3122</span></td>
                <td><span className="text-success">+1.065%</span></td>
                <td><span className="text-danger">-0.75%</span></td>
              </tr>
              <tr>
                <th scope="row">#5</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Sculpture Human Face</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>2987</span></td>
                <td><span className="text-success">+1.065%</span></td>
                <td><span className="text-success">+0.75%</span></td>
              </tr>
              <tr>
                <th scope="row">#6</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Monkey Arts</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>2574</span></td>
                <td><span className="text-success">+1.065%</span></td>
                <td><span className="text-danger">-0.75%</span></td>
              </tr>
              <tr>
                <th scope="row">#7</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Kings with Bitcoin</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>2347</span></td>
                <td><span className="text-success">+1.065%</span></td>
                <td><span className="text-success">+0.75%</span></td>
              </tr>
              <tr>
                <th scope="row">#8</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Pixel Plane</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>2102</span></td>
                <td><span className="text-success">+1.065%</span></td>
                <td><span className="text-danger">-0.75%</span></td>
              </tr>
              <tr>
                <th scope="row">#9</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Macaw Bird</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>1875</span></td>
                <td><span className="text-danger">+1.065%</span></td>
                <td><span className="text-success">-0.75%</span></td>
              </tr>
              <tr>
                <th scope="row">#10</th>
                <td> <a className="btn btn-minimal text-dark hover-primary fw-bold" href="#">Sculpture Human Face</a></td>
                <td><span className="d-inline-block"><i className="bi bi-currency-dollar"></i>1874</span></td>
                <td><span className="text-success">+1.065%</span></td>
                <td><span className="text-danger">-0.75%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="funto-pagination">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mb-0">
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">...</a></li>
            <li className="page-item"><a className="page-link" href="#">9</a></li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
};

export default RankingArea;