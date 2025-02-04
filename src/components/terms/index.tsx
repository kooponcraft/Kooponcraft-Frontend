

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import TermsArea from './TermsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Terms = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Terms" subtitle="Terms" />
      <Divider />
      <TermsArea />
      <Divider />
      <FooterOne />
    </>
  );
};

export default Terms;