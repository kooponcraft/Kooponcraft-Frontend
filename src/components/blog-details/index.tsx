

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogDetailsArea from './BlogDetailsArea';

const BlogDetails = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb subtitle="Blog Details" title="Blog Details" />
    <Divider />
    <BlogDetailsArea />
    <Divider />
    <FooterOne />
      
    </>
  );
};

export default BlogDetails;