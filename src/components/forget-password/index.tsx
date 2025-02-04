
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import ForgetPasswordArea from './ForgetPasswordArea';
import FooterOne from '@/layouts/footers/FooterOne';

const ForgetPassword = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb subtitle="Forget Password" title="Forget Password" />
    <Divider />
    <ForgetPasswordArea />
    <Divider />
    <FooterOne />     
    </>
  );
};

export default ForgetPassword;