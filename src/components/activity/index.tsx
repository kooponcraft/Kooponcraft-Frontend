


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import ActivityArea from './ActivityArea';

const Activity = () => {
  return (
    <>
    
    <Breadcrumb title="Activity" subtitle="Activity" />
    <Divider />
    <ActivityArea />
    <Divider />
    
      
    </>
  );
};

export default Activity;