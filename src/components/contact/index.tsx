

import React from 'react';
import Divider from '../common/Divider';
import ContactArea from './ContactArea';
import Breadcrumb from '../common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Contact = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Contact" subtitle="Contact" />
      <Divider />
      <ContactArea />
      <Divider />
      <FooterOne />
    </>
  );
};

export default Contact;