

import React from 'react';
import AboutArea from './AboutArea';
import Divider from '../common/Divider';
import AboutCounter from './AboutCounter';
import Breadcrumb from '../common/Breadcrumb';
import ClientFeedback from './ClientFeedback';

import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About" subtitle="About" />
      <Divider />
      <AboutArea />
      <Divider />
      <AboutCounter />
      <Divider />
      <ClientFeedback />
      <Divider />
      <FooterOne />
    </>
  );
};

export default About;