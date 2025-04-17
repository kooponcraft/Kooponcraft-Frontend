
'use client'


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import CouponMatchGame from './CouponMatch';

const CouponMatch = () => {
  
  return (
    <>
    
    <Breadcrumb title="Coupon Match" subtitle="Coupon Match" />
    <Divider />
    <CouponMatchGame />
    <Divider />
          
    </>
  );
};

export default CouponMatch;