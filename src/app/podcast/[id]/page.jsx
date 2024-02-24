import Layout from '@/app/mainlayout';
import React from 'react';

const SinglePodcast = async({params}) => {
    const {id} = params; 
    console.log(id);
    return (
        <Layout> 
        <div className='pl-10 pt-20'>
            <h1>Single podcast id: { id }</h1>
        </div>
        </Layout>
    );
};

export default SinglePodcast;