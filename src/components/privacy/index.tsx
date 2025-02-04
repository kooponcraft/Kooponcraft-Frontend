
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import PrivacyArea from './PrivacyArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Privacy = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Privacy" subtitle="Privacy Policy" />
      <Divider />
      <PrivacyArea />
      <Divider />
      <FooterOne />
    </>
  );
};

export default Privacy;