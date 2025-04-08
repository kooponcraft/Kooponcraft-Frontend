


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import HelpQuestionsArea from './HelpQuestionsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const HelpQuestions = () => {
  return (
    <>
      
      <Breadcrumb title="Help Questions" subtitle="All Questions" />
      <Divider />
      <HelpQuestionsArea />
      <Divider />
            
    </>
  );
};

export default HelpQuestions;