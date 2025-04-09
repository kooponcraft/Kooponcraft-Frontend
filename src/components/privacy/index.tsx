
import React from 'react';

import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import PrivacyArea from './PrivacyArea';


const Privacy = () => {
  return (
    <>
      
      <Breadcrumb title="Privacy" subtitle="Privacy Policy" />
      <Divider />
      <PrivacyArea />
      <Divider />
      
    </>
  );
};

export default Privacy;