

import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import NewsletterArea from './NewsletterArea';


const Newsletter = () => {
  return (
    <>
      
      <Breadcrumb title="Newsletter" subtitle="Newsletter" />
      <Divider />
      <NewsletterArea />
      <Divider />
      
    </>
  );
};

export default Newsletter;