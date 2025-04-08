


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import RankingArea from './RankingArea';

const Ranking = () => {
  return (
    <>
      
      <Breadcrumb title="Ranking" subtitle="Ranking" />
      <Divider />
      <RankingArea />
      <Divider />
      

    </>
  );
};

export default Ranking;