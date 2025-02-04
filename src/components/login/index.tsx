

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import LoginArea from './LoginArea';

const Login = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb subtitle="Login" title="Login" />
      <Divider />
      <LoginArea />
      <Divider />
      <FooterOne />

    </>
  );
};

export default Login;