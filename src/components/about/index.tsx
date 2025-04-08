

import React from 'react';
import AboutArea from './AboutArea';
import Divider from '../common/Divider';
import AboutCounter from './AboutCounter';
import Breadcrumb from '../common/Breadcrumb';
import ClientFeedback from './ClientFeedback';


import FooterOne from '@/layouts/footers/FooterOne';

const About = () => {
  return (
    <>
      
      <Breadcrumb title="About" subtitle="About" />
      <Divider />
      <AboutArea />
      <Divider />
      <AboutCounter />
      <Divider />
      <ClientFeedback />
      <Divider />
      
    </>
  );
};

export default About;