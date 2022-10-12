import React from 'react';
import { Link } from 'react-router-dom';
import './SingleQuizCard.css'

const SingleQuizCard = ({card}) => {
    const {id,name,total,logo} =card;
    return ( 
        
            <div className="card bg-sky-200 w-52 md:w-64 lg:w-80 glass">
                <figure><img src={logo} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Quiz:{total}</p>
                    <div className="card-actions justify-end">
                    <button className="btn  custom-btn"><Link to={`/card/${id}`}>{name} Quiz</Link></button>
                    </div>
                </div>
                </div>
        
    );
};

export default SingleQuizCard;