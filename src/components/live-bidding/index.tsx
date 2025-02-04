
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import LiveBiddingArea from './LiveBiddingArea';
import FooterOne from '@/layouts/footers/FooterOne';

const LiveBidding = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Live Bidding" subtitle="Live Bidding" />
    <Divider />
    <LiveBiddingArea />
    <Divider />
    <FooterOne />      
    </>
  );
};

export default LiveBidding;