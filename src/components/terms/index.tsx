

import React from 'react';

import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import TermsArea from './TermsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Terms = () => {
  return (
    <>
      
      <Breadcrumb title="Terms" subtitle="Terms" />
      <Divider />
      <TermsArea />
      <Divider />
      
    </>
  );
};

export default Terms;