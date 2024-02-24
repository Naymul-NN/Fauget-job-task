import React from 'react';
import Layout from '../mainlayout';
import Podcast from '@/components/poscast/Podcast';
import Privet from '@/components/privet/PrivetRoute';
export const metadata = {
    title: "Fauget/podcast",
    description: "find you podcast",
  };
const Podcasts = () => {
    return (
        <Privet>
           <Layout>
           <div className='pl-10'>
            <Podcast></Podcast>
             </div>
            </Layout>
        </Privet>

    );
};

export default Podcasts;