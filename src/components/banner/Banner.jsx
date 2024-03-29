import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel-item relative w-full mx-auto h-[350px]  ">
                
                <Image
                    //    width={fill}
                    //    height={400}
                       fill={true}
                       src="https://i.ibb.co/2K0F6sX/images.jpg" alt="Shoes" />
                <div className='absolute   pl-20 h-full  w-full '>
                    <div className=' space-y-5 pt-8 '>
                        <h1>Top play music station</h1>
                        <h1 className='text-2xl font-bold '> The Dark Side of Music: Unveiling Its Negative Effects</h1>
                        <p className=' text-justify w-[70%]'>Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>
                        <button className='px-5 py-1  bg-gray-700 mr-5  rounded-full'>For You?</button>
                       </div>
                </div> 

            </div>
        </div>
    );
};

export default Banner;