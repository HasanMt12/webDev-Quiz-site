
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuizCard from './SinglequizCard/SingleQuizCard';


const Home = () => {
    const quiz = useLoaderData().data;
    // console.log(quiz)
    return (
        <div>
            
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
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