
'use client'

import React from 'react';
import DashboardHeader from '@/layouts/headers/DashboardHeader'; 
import NotificationsArea from './NotificationsArea';



const Notifications = () => {
  
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
       
      <NotificationsArea />
    </>
  );
};

export default Notifications;