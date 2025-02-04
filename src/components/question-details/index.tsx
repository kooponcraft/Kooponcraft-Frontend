
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import QuestionDetailsArea from './QuestionDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const QuestionDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Question" subtitle="Question Details" />
      <Divider />
      <QuestionDetailsArea />
      <Divider />
      <FooterOne />
    </>
  );
};

export default QuestionDetails;