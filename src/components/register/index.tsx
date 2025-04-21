

import React, { Suspense } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import RegisterArea from './RegisterArea';


const Register = () => {
  return (
    <>
      
      <Breadcrumb title="Register" subtitle="Register" />
      <Divider />
      <Suspense fallback={<div></div>}>
        <RegisterArea />
      </Suspense>
      <Divider />
      
    </>
  );
};

export default Register;