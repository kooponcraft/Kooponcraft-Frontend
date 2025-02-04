
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import HelpArea from './HelpArea';
import FooterOne from '@/layouts/footers/FooterOne';

const HelpCenter = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Help" subtitle="Help Center" />
    <Divider />
    <HelpArea />
    <Divider />
    <FooterOne />      
    </>
  );
};

export default HelpCenter;