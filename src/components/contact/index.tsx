

import React from 'react';
import Divider from '../common/Divider';
import ContactArea from './ContactArea';
import Breadcrumb from '../common/Breadcrumb';

import FooterOne from '@/layouts/footers/FooterOne';

const Contact = () => {
  return (
    <>
      
      <Breadcrumb title="Contact" subtitle="Contact" />
      <Divider />
      <ContactArea />
      <Divider />
      
    </>
  );
};

export default Contact;