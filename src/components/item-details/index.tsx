
'use client'

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import ItemDetailsArea from './ItemDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';
import RelatedProjects from '../common/RelatedProjects';


const ItemDetails = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Item Details" subtitle="Item Details" />
    <Divider />
    <ItemDetailsArea />
    <Divider />
    <RelatedProjects />
    <Divider /> 
    <FooterOne />      
    </>
  );
};

export default ItemDetails;