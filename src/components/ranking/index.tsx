

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import RankingArea from './RankingArea';

const Ranking = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Ranking" subtitle="Ranking" />
      <Divider />
      <RankingArea />
      <Divider />
      <FooterOne />

    </>
  );
};

export default Ranking;