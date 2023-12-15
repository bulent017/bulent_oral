import React, { useState } from 'react';

// icons
import {
  FaAndroid,
  FaJava,
  FaFigma,
  FaGit
  
} from 'react-icons/fa';

import {
  SiSqlite,
  SiKotlin,
  SiFirebase,
  SiMicrosoftsqlserver,
  SiMysql,
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Mobil Development',
        icons: [
          <FaAndroid />,
          <SiKotlin />,
          <FaJava />,
          
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />],
      },
      {
        title: 'Database Management',
        icons: [< SiMicrosoftsqlserver/>,<SiMysql/>,<SiSqlite/>,<SiFirebase/>],
      },
      {
        title: 'Version Control',
        icons: [<FaGit />],
      },
    ],
  },
  
  {
    title: 'experience',
    info: [
      {
        title: 'Android Developer Intern  İnnova Bilişim Çözümleri',
        stage: '2022 (20 work day)' ,
        projects: 'Studies were carried out on Design Patterns, Software Architectural Pattern, Kotlin, Android Development. Developed To Do application using Firebase and Kotlin.'
      },
      {
        title: 'Software Engineer Intern- Başarsoft Bilgi Teknolojileri',
        stage: '12/2022 09/2023',
        projects: 'Running Tracker App was developed using Kotlin, Firebase and OSM library. Work was carried out on the server and android application sides of Sedaş and Gediz applications within Edabis, using Java and Oracle Database.API requests in the GFK TURKEY application were rewritten with Retrofit.'
        
      },
      
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Spring Bootcamp - TÜBİTAK BİLGEM YTE',
        stage: '2023',
      },
      {
        title: 'Java Bootcamp - TÜBİTAK BİLGEM YTE',
        stage: '2023',
      },
      {
        title: 'Microservis Architecture Bootcamp - TÜBİTAK BİLGEM YTE',
        stage: '2023',
      },
      {
        title: 'Mock-Up Figma Bootcamp - TÜBİTAK BİLGEM YTE',
        stage: '2023',
      },
      {
        title: 'User Experience Bootcamp - TÜBİTAK BİLGEM YTE',
        stage: '2023',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Code with <span className='text-accent'>passion</span> engineer your future.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            As a senior Computer Engineering student, I have
             honed my skills in developing mobile applications 
             using Java and Kotlin for Android platforms. With
              approximately one year of experience as an intern,
               I've cultivated a robust understanding of 
               database operations, management, and Android development, 
               enhancing my technical proficiency across multiple domains.
               Recently, I've expanded my expertise beyond mobile development
                to embrace Spring Boot, furthering my knowledge and capabilities
                 in software engineering. I am passionate about self-improvement
                  and continuously seek to learn and master new technologies.
          </motion.p>
          {/* counters */}
         
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  {/* projects */}
                  {/* Projects bilgisini yalnızca 'experience' bölümü için göster */}
                  {aboutData[index].title === 'experience' && item.projects && (
                    <div className='flex flex-col text-left'>
                      <span className='text-sm text-accent'>Projects and Works:</span>
                      <span className='text-sm'>{item.projects}</span>
                    </div>
                  )}
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
