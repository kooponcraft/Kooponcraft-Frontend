


import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Divider from '../common/Divider';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogDetailsArea from './BlogDetailsArea';

const BlogDetails = () => {
  return (
    <>
    
    <Breadcrumb subtitle="Blog Details" title="Blog Details" />
    <Divider />
    <BlogDetailsArea />
    <Divider />
    
      
    </>
  );
};

export default BlogDetails;