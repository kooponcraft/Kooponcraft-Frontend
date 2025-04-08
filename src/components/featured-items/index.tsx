
import React from 'react';
import Divider from '../common/Divider';
import Breadcrumb from '../common/Breadcrumb';

import FooterOne from '@/layouts/footers/FooterOne';
import FeaturedItemsArea from './FeaturedItemsArea';

const FeaturedItems = () => {
  return (
    <>
      
      <Breadcrumb title="Featured" subtitle="Featured" />
      <Divider />
      <FeaturedItemsArea />
      <Divider />
      
    </>
  );
};

export default FeaturedItems;