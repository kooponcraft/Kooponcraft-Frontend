

import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import ForgetPasswordArea from './ForgetPasswordArea';


const ForgetPassword = () => {
  return (
    <>
    
    <Breadcrumb subtitle="Forget Password" title="Forget Password" />
    <Divider />
    <ForgetPasswordArea />
    <Divider />
         
    </>
  );
};

export default ForgetPassword;