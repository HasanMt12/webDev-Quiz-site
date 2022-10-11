import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import './QuizDetailsCard.css'

const QuizDetailsCard = ({questionArr}) => {
    const {question,options,correctAnswer} = questionArr;
    const handleClick = (option) => {
    if (correctAnswer === option) {
      toast.success("Correct Ans!, Good job", { autoClose: 400 });
    } else {
      toast.error("Wrong Ans!, Try Again", { autoClose: 400 });
    }
  };
  const showButtonHandler = (correctAnswer) => {
    toast.info(correctAnswer, { autoClose: 400 });
  };

    
    return (
       <div>
      <div className="flex justify-between">
        <div dangerouslySetInnerHTML={{ __html: question }} className="mb-4 mt-5"></div>
        <div>
        <button className="justify-end" onClick={() => showButtonHandler(correctAnswer)}>
          {" "}
          <FaEye />{" "}
        </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4  p-4 bg-white div-shadow">
        {options.map((option) => (
          <QuizOption option={option} handleClick={handleClick}></QuizOption>
        ))}
      </div>
    </div>
                
    );
};

export default QuizDetailsCard;