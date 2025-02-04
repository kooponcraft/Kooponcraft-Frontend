
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import ExploreItems from './ExploreItems';
import FooterOne from '@/layouts/footers/FooterOne';

const ExploreOne = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Explore" subtitle="Explore One" />
    <Divider />
    <ExploreItems />
    <Divider />
    <FooterOne />     
    </>
  );
};

export default ExploreOne 