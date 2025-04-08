
import React from 'react';

import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import LiveBiddingArea from './LiveBiddingArea';
import FooterOne from '@/layouts/footers/FooterOne';

const LiveBidding = () => {
  return (
    <>
    
    <Breadcrumb title="Live Bidding" subtitle="Live Bidding" />
    <Divider />
    <LiveBiddingArea />
    <Divider />
          
    </>
  );
};

export default LiveBidding;