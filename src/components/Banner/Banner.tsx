import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner__main--wrapper'>
      <section className='banner__info'>
        <h1 className='banner__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
        <div className='banner__buttons--wrapper'>
          {/* <a className='button' href='/#'>Unkock features</a> */}
          <button className='button'>Load new image</button>
        </div>
      </section>
      <img className='banner__img' src='https://source.unsplash.com/random/1600x900' alt='random feature' />
    </div>
  );
};

export default Banner;