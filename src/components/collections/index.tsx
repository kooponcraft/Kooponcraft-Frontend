
import React from 'react';

import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import CollectionsArea from './CollectionsArea';

const Collections = () => {
  return (
    <>
    
    <Breadcrumb title="Collections" subtitle="Collections" />
    <Divider />
    <CollectionsArea />
    <Divider />
    
      
    </>
  );
};

export default Collections;