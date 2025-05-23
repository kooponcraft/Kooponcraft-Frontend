
'use client'


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import ItemDetailsArea from './ItemDetailsArea';

import RelatedProjects from '../common/RelatedProjects';

 

const ItemDetails = ({ title, subtitle }: any) => {

  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  

  return (
    <>
    
    <Breadcrumb title={title} subtitle={subtitle} />
    <Divider />
    <ItemDetailsArea />
    <Divider />
          
    </>
  );
};

export default ItemDetails;