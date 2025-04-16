


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import LeaderboardArea from './LeaderboardArea';


const Leaderboard = () => {
  return (
    <>
      
      <Breadcrumb subtitle="Leaderboard" title="Leaderboard" />
      <Divider />
      <LeaderboardArea />
      <Divider />
      

    </>
  );
};

export default Leaderboard;