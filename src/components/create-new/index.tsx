

import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import CreateNewArea from './CreateNewArea';

const CreateNew = () => {
  return (
    <>
    
    <Breadcrumb title="Create New" subtitle="Create New" />
    <Divider />
    <CreateNewArea />
    <Divider />
          
    </>
  );
};

export default CreateNew;