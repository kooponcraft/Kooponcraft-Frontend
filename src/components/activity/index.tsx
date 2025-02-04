

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import ActivityArea from './ActivityArea';

const Activity = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Activity" subtitle="Activity" />
    <Divider />
    <ActivityArea />
    <Divider />
    <FooterOne />
      
    </>
  );
};

export default Activity;