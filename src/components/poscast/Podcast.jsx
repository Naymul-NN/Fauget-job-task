"use client"
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

const Podcast = () => {
  const [playStates, setPlayStates] = useState([]);
  const audioRefs = useRef([]);
  const [display, setDisplay] = useState([]);

  // get the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.lyrics.ovh/suggest/e');
        setDisplay(response.data.data);
        setPlayStates(Array(response.data.data.length).fill(false)); // Initialize play states
        audioRefs.current = Array(response.data.data.length).fill(null).map(() => new Audio());
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []); 

  // function for preview 
  const handlePlayPause = (index, previewUrl) => {
    const newPlayStates = [...playStates];
    newPlayStates[index] = !newPlayStates[index];

    if (newPlayStates[index]) {
      audioRefs.current[index].src = previewUrl;
      audioRefs.current[index].play();
    } else {
      audioRefs.current[index].pause();
    }

    setPlayStates(newPlayStates);
  };

  const popular = display.filter(item => {
    const rank = parseInt(item.rank);
    return rank >= 10000 && rank <= 400000;
  });
  
  const trend = display.filter(item => {
    const rank = parseInt(item.rank);
    return rank > 410000 && rank <= 2000000;
  });
 
//   console.log(popular);
//   console.log(trend);

  return (
    <div>

      <button className='text-2xl bg-gray-500 px-5 py-1 rounded-full'>Popular</button>
    <div className='grid grid-cols-5 gap-6'>
      {popular.map((item, index) => (
        <div key={item.id} className="shadow-xl relative">
          <figure className="px-10 pt-10">
            <Image src={item.album.cover} height={300} width={300} alt="Shoes" className="rounded-xl" />
            <div onClick={() => handlePlayPause(index, item.preview)} className="play-icon text-red-600 absolute top-20 left-24 text-3xl">
              {playStates[index] ? '❚❚' : '▶'}
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <Link href={`/podcast/${item.id}`}>See details</Link>
            </div>
          </div>
        </div>
      ))}
      </div>
      <button className='text-2xl mt-5 bg-gray-500 px-5 py-1 rounded-full'>Trend</button>
      <div className='grid grid-cols-5 gap-6'>
      {trend.map((item, index) => (
          <div key={item.id} className="shadow-xl relative">
          <figure className="px-10 pt-10">
            <Image src={item.album.cover} height={300} width={300} alt="Shoes" className="rounded-xl" />
            <div onClick={() => handlePlayPause(index, item.preview)} className="play-icon text-red-600 absolute top-20 left-24 text-3xl">
              {playStates[index] ? '❚❚' : '▶'}
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <Link href={item.link}>See details</Link>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div> 
  );
};

export default Podcast;
