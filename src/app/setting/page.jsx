import React from 'react';
import Layout from '../mainlayout';
import Profile from '@/components/profile/Profile';
import Privet from '@/components/privet/PrivetRoute';

export const metadata = {
    title: "Fauget/setting",
    description: "see your profile",
  };
const Setting = () => {
    return (
      <Privet>
        <Layout>
        <div className='pl-10'>
           <Profile></Profile>
        </div>
     </Layout>
      </Privet>
    );
};

export default Setting;