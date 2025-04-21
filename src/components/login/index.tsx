


import React, { Suspense } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';

import LoginArea from './LoginArea';

const Login = () => {
  return (
    <>
      
      <Breadcrumb subtitle="Login" title="Login" />
      <Divider />
      <Suspense fallback={<div></div>}>
          <LoginArea />
      </Suspense>
      <Divider />
      

    </>
  );
};

export default Login;