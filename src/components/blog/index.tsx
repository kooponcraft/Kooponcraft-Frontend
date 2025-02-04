
import React from 'react';
import BlogArea from './BlogArea';
import Divider from '../common/Divider';
import Breadcrumb from '../common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Blog" subtitle="Blog" />
      <Divider />
      <BlogArea />
      <Divider />
      <FooterOne />
    </>
  );
};

export default Blog;