import Image from 'next/image';
import React from 'react';



const Resume: React.FC = () => {
  return (
    <div className='py-[70px]'>
      <div className='container mx-auto  padding-md'>
        <div className='mb-[48px]'>

          <h2 className='text-[45px] sm:text-[73px]   font-display text-center text-primary  dark:text-primary-light mb-[25px] sm:mb-[30px]'>Hey!</h2>
          <h3 className='text-[20px] sm:text-[25px] font-inter font-medium text-center mb-[18px]'> I am <span className='text-primary  dark:text-primary-light'>Yashpreet Rana</span></h3>
          <p className=' text-[16px] sm:text-[18px] font-inter font-normal text-center max-w-[870px] mx-auto '>I am a passionate <span className=' dark:text-primary-light text-primary underline  decoration-yellow-500 underline-offset-6 '>Full-stack Developer</span> with experience in latest dev tools, dedicated to
            continuous learning, backed by 1 year of hands-on experience in crafting dynamic and  user-centric web applications.</p>
        </div>
        <div className='mb-5'>
          <h3 className='text-[20px] sm:text-[25px] font-inter font-medium text-center '> Technical <span className='text-primary  dark:text-primary-light '>Skills</span></h3>
        </div>
        <div className='flex flex-wrap justify-center lg:max-w-[800px] mx-auto gap-3 mb-7 '>
          <Image src="/logos/React.svg" alt='Reactjs' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/Redux.svg" alt='Redux' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/Kubernetes.svg" alt='kubernetes' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/Docker.svg" alt='docker' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/postman.svg" alt='postman' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/tailwindcss.svg" alt='tailwind' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/express.svg" alt='express' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/prisma.svg" alt='prisma' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/mongodb.svg" alt='mongodb' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/html.svg" alt='html' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/js.svg" alt='javascript' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/css.svg" alt='css' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/zod.svg" alt='zod' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/figma_logo.svg" alt='figma' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/vscode.svg" alt='vscode' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/Github.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />

          <Image src="/logos/AWS.svg" alt='Aws' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/Nodejs.svg" alt='Nodejs' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/Nextjs.svg" alt='Nextjs' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
          <Image src="/logos/shadcn.svg" alt='shadcn' width={100} height={100} className='w-[44px] h-[39px] mb-4' />

        </div>

        <div className='mb-5'>
          <h3 className='text-[20px] sm:text-[25px] font-inter font-medium text-center  mb-5'> Work <span className='text-primary dark:text-primary-light'>Experience</span></h3>
          <p className='text-[15px] sm:text-[19px] text-center font-medium font-inter'>TWS <span className='text-gray'>(Tekki web solutions private ltd) </span> | On-site <span className='text-primary  dark:text-primary-light'>(Ludhiana)</span></p>
        </div>
        <div className='flex items-center justify-center mb-[20px]' >
          <button className='flex items-center justify-center gap-3 p-3 rounded-[11px] bg-primary hover:bg-primarydark  text-white max-sm:w-full sm:min-w-[350px] max-h-[46px]'>
            <p className='text-[16px] sm:text-[20px] font-inter text-centers'>Download Resume
            </p>
            <Image src="/logos/download.svg" alt='arrow' width={100} height={100} className='w-[24px] h-[24px]' />
          </button>
        </div>


      </div>
    </div>
  );
};

export default Resume;
