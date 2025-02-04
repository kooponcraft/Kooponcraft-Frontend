
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import CollectionsArea from './CollectionsArea';

const Collections = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Collections" subtitle="Collections" />
    <Divider />
    <CollectionsArea />
    <Divider />
    <FooterOne />
      
    </>
  );
};

export default Collections;