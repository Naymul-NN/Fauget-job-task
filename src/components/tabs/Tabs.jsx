"use client"
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

const Tabs = () => {
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

  return (
    <div>

      <h1 className='text-center text-2xl pt-5 border-b-2 border-b-red-600 w-40 mx-auto pb-3'>On trendings</h1>
    <div className='grid grid-cols-4 gap-6'>
      {display.map((item, index) => (
        <div key={item.id} className="shadow-xl relative">
          <figure className="px-10 pt-10">
            <Image src={item.album.cover} height={300} width={300} alt="Shoes" className="rounded-xl" />
            <div onClick={() => handlePlayPause(index, item.preview)} className="play-icon text-red-600 absolute top-28 left-28 text-3xl">
              {playStates[index] ? '❚❚' : '▶'}
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <button >See details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div> 
  );
};

export default Tabs;
