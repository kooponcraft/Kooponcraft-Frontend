

import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import RegisterArea from './RegisterArea';


const Register = () => {
  return (
    <>
      
      <Breadcrumb title="Register" subtitle="Register" />
      <Divider />
      <RegisterArea />
      <Divider />
      
    </>
  );
};

export default Register;