

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import HelpQuestionsArea from './HelpQuestionsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const HelpQuestions = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Help Questions" subtitle="All Questions" />
      <Divider />
      <HelpQuestionsArea />
      <Divider />
      <FooterOne />      
    </>
  );
};

export default HelpQuestions;