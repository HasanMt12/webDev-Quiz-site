
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuizCard from './SinglequizCard/SingleQuizCard';
import Lottie from 'lottie-react'
import reader from '../assets/reader.json'



const Home = () => {
    const quiz = useLoaderData().data;
    // console.log(quiz)
    return (
        <div >
           <div className='px-4  py-16 mx-auto sm:max-w-xl md:mb-4 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 '>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <div>
              
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              Testing leads to failure, and failure . 
              <span className='inline-block text-blue-400'>leads to understanding</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
           
            <a
              href='/about'
              aria-label=''
              className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
            >
              Learn More
            </a>
          </div>
        </div>
        <div className='relative lg:w-1/2 pb-16'>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-90 md:mb-4'>
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>
    </div>
            
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                    {
                        quiz.map(card=> <SingleQuizCard
                        key={quiz.id}
                        card={card}
                        ></SingleQuizCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;