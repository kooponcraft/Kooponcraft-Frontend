


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';

import ConnetWalletArea from './ConnetWalletArea';

const ConnetWallet = () => {
  return (
    <>
    
    <Breadcrumb subtitle="Connet Wallet" title="Connet" />
    <Divider />
    <ConnetWalletArea />
    <Divider />
    
      
    </>
  );
};

export default ConnetWallet;