import React from 'react';
import Image from 'next/image';



const HeroSection: React.FC = () => {
  return (
    <div className='relative '>

      <div className=' mt-[100px] mb-[90px]' >
        <div>
          <h1 className='dark:text-white text-black max-sm:leading-tight  text-[55px] sm:text-[73px] text-center font-display font-black  '>Striving <span className='text-primary dark:text-[#a97cb8]'>Programmer</span></h1>
        </div>
        <div className='flex justify-center items-center mb-8'>
          <Image src={"/images/Herocard.svg"} alt="hero" width={100} height={100} className='max-w-[500px] max-height-[374px] w-full h-full' />

        </div>
        <div>
          <p className='text-center text-[14px] sm:text-[17px]'>Hey, I&lsquo;m Yashpreet Rana, an independent programmer.  Keeping up with the latest tech is my jam.🚀 <br />Let&lsquo;s code something amazing! 😊</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
