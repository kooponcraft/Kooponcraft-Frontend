

import React from 'react';
import MyWalletArea from './MyWalletArea';
import DashboardHeader from '@/layouts/headers/DashboardHeader'; 

const MyWallet = () => {
  return (
    <>
      <DashboardHeader /> 
      <MyWalletArea />
    </>
  );
};

export default MyWallet;