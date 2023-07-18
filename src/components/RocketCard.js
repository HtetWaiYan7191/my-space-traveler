import React from 'react';
import '../styles/RocketCard.css';

function RocketCard({rocket}) {
  return (
    <div className='rocket-card flex gap-10 my-7 w-[80%] mx-auto'>
        <figure className='img-container'>
            <img src={rocket.image}  alt="rocket" className='rocket-image max-w-none'/>
        </figure>
        <div className='rocket-data flex flex-col gap-3'>
            <h2 className=' font-semibold text-2xl rocket-title'>{rocket.name}</h2>
            <p className='rocket-description text-justify'>{rocket.description}</p>
            <button type='button' className=' reserve-btn px-4 py-2 w-[20%] text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 '>Reserve Rocket</button>
        </div>
    </div>
  );
}

export default RocketCard;
