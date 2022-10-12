import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetailsCard from '../QuizDetailsCard/QuizDetailsCard';
import './QuizDetails.css'

const QuizDetails = () => {
    const quizQuestion = useLoaderData().data;
    const {name,total,questions} = quizQuestion;
    console.log(questions)
    
    return (
        <div className='container navbar-a '>
            <div className='main-div'>
                <div>
                    <h1 className='quizSubject-name'>Quiz of {name}</h1> 
                    <p className='text-sky-700'>Total Question {total}</p>
                </div>
               
           </div>

          
            <div className=''>
                {
                    questions.map(questionArr => <QuizDetailsCard

                    key={quizQuestion.id}
                    
                    questionArr={questionArr}
                    
                    ></QuizDetailsCard>)
                }
            </div>
           </div>
        
    );
};

export default QuizDetails;