
import React from 'react';

import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import QuestionDetailsArea from './QuestionDetailsArea';


const QuestionDetails = () => {
  return (
    <>
      
      <Breadcrumb title="Question" subtitle="Question Details" />
      <Divider />
      <QuestionDetailsArea />
      <Divider />
      
    </>
  );
};

export default QuestionDetails;