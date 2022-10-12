import React from 'react';
import './QuizOption.css'

const QuizOption = ({option, handleClick}) => {
    return (
        <div className='radio-div'  onClick={() => handleClick(option)}>
      <input className="mr-2 radio-btn" type="radio" name="choose"/>
      {option}
    </div>
    );
};

export default QuizOption;