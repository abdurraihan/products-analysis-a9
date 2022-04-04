import React from 'react';

const Review = (props) => {
    const {name,review,ratings} = props.review;
    return (
        <div className='border-2 p-5 text-xl'>
            <h1 >Name: {name}</h1>
            <p>revew: {review}</p>
            <h4>ratings:{ratings}</h4>
        </div>
    );
};

export default Review;