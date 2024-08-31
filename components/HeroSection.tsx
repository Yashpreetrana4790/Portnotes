import React from 'react';
import Image from 'next/image';



const HeroSection: React.FC = () => {
  return (
    <div className='relative '>

      <div className='container mx-auto  padding-md'>
        <div className='mt-[120px] mb-[90px]' >
          <div>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-[#5c3a67] text-[35px] sm:text-[53px] text-center font-mono font-black  '>Striving <span>Programmer</span></h1>
          </div>
          <div className='flex justify-center items-center mb-8'>
            <Image src={"/images/Herocard.svg"} alt="hero" width={100} height={100} className='max-w-[500px] max-height-[374px] w-full h-full' />

          </div>
          <div>
            <p className='text-center text-[14px] sm:text-[17px]'>Hey, I&lsquo;m Yashpreet Rana, an independent programmer.  Keeping up with the latest tech is my jam.🚀 <br />Let&lsquo;s code something amazing! 😊</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
