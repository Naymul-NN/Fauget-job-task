import Banner from '@/components/banner/Banner';
import Tabs from '@/components/tabs/Tabs';
import React from 'react';
import Layout from './mainlayout';

const Home = () => {
  return (
    <Layout> 

    <div className='px-10'>
      <Banner></Banner>
      <Tabs></Tabs>
    </div>
    </Layout>
  );
};

export default Home;