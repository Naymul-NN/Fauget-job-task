import React from 'react';
import Layout from '../mainlayout';
import Profile from '@/components/profile/Profile';

export const metadata = {
    title: "Fauget/setting",
    description: "see your profile",
  };
const Setting = () => {
    return (
        <Layout>
        <div className='pl-10'>
           <Profile></Profile>
        </div>
     </Layout>
    );
};

export default Setting;