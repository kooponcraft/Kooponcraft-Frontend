
import React from 'react';
import BlogArea from './BlogArea';
import Divider from '../common/Divider';
import Breadcrumb from '../common/Breadcrumb';



const Blog = () => {
  return (
    <>
      
      <Breadcrumb title="Blog" subtitle="Blog" />
      <Divider />
      <BlogArea />
      <Divider />
      
    </>
  );
};

export default Blog;