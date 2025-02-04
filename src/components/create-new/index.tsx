
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import CreateNewArea from './CreateNewArea';

const CreateNew = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Create New" subtitle="Create New" />
    <Divider />
    <CreateNewArea />
    <Divider />
    <FooterOne />      
    </>
  );
};

export default CreateNew;