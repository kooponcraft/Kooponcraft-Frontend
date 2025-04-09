
'use client'


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import ItemDetailsArea from './ItemDetailsArea';

import RelatedProjects from '../common/RelatedProjects';

 

const ItemDetails = () => {

  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  

  return (
    <>
    
    <Breadcrumb title="Item Details" subtitle="Item Details" />
    <Divider />
    <ItemDetailsArea />
    <Divider />
    <RelatedProjects />
    <Divider /> 
          
    </>
  );
};

export default ItemDetails;