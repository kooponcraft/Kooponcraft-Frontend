


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import LoginArea from './LoginArea';

const Login = () => {
  return (
    <>
      
      <Breadcrumb subtitle="Login" title="Login" />
      <Divider />
      <LoginArea />
      <Divider />
      

    </>
  );
};

export default Login;