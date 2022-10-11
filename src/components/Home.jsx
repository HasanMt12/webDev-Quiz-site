
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuizCard from './SinglequizCard/SingleQuizCard';

const Home = () => {
    const quiz = useLoaderData().data;
    // console.log(quiz)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
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