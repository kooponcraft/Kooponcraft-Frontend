

import React from 'react';

import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import TopSellerArea from './TopSellerArea';


const TopSeller = () => {
  return (
    <>
      
      <Breadcrumb title="Top Seller" subtitle="Top Seller" />
      <Divider />
      <TopSellerArea />
      <Divider />
      
    </>
  );
};

export default TopSeller;