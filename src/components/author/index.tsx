
import React from 'react';
import AuthorArea from './AuthorArea';
import Divider from '../common/Divider';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Author = () => {
  return (
    <>
      <HeaderOne />
      <Divider />
      <AuthorArea />
      <Divider />
      <FooterOne />
    </>
  );
};

export default Author;