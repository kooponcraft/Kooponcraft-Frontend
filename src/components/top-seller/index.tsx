

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import TopSellerArea from './TopSellerArea';
import FooterOne from '@/layouts/footers/FooterOne';

const TopSeller = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Top Seller" subtitle="Top Seller" />
      <Divider />
      <TopSellerArea />
      <Divider />
      <FooterOne />
    </>
  );
};

export default TopSeller;