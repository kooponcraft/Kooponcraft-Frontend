'use client'

import AppImage from "@/components/common/AppImage";
import React from 'react';
import Link from 'next/link';
import NiceSelect from '@/ui/NiceSelect';
import axios from 'axios';
import appAxios from "@/config/axios";


const TopPerformers = () => {

  const [leaderboard, setLeaderboard] = React.useState<any[]>([]);
  const [page, setPage] = React.useState(1);
  const limit = 10;

  React.useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await appAxios.get(`/getLeaderboard`, {
          params: { page, limit },
        });
        setLeaderboard(response.data.leaderboard || []);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        return error;
      }
    };

    fetchLeaderboard();
  }, [page]);

  const selectHandler = (e: any) => { };

  return (
    <>
       <div className="popular-collection-wrapper">
      <div className="container">
        <div className="section-heading position-relative z-index-1000 d-flex align-items-center justify-content-center">
          <h2 className="mb-0">Top performers in </h2>
          

          <NiceSelect
								className="filter-select popular-collection-select popularSelectItems"
								options={[
									{ value: "polkadot", text: "Polkadot" },
									{ value: "moonbeam", text: "Moonbeam" },
									{ value: "acala", text: "Acala" },     
								]}
								defaultCurrent={0}
								onChange={selectHandler}
								placeholder="Select an option"
								name="myNiceSelect"
							/>

 
 
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">

          {leaderboard.map((user, i) => (
          <div key={i} className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap">
                      <AppImage src={user.profileImageUrl || `https://api.dicebear.com/6.x/identicon/svg?seed=${encodeURIComponent(user.username )}`} alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1">#{i + 1}</div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative">
                        </div>
                        <div className="name-author">
                          <a className="name d-block hover-primary fw-bold text-truncate" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="${user.username}">{user.username}</a>
                          <a className="author d-block fz-12 hover-primary text-truncate" href="#">@{user.username}</a>
                        </div>
                      </div>
                      <div className="px-5 price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">{user.points} XP</h6>
                        </div>
                      </div>
                    </div>
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
};

export default TopPerformers;