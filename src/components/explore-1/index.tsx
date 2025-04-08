
import React from 'react';

import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import ExploreItems from './ExploreItems';
import FooterOne from '@/layouts/footers/FooterOne';

const ExploreOne = () => {
  return (
    <>
    
    <Breadcrumb title="Explore" subtitle="Explore One" />
    <Divider />
    <ExploreItems />
    <Divider />
         
    </>
  );
};

export default ExploreOne 