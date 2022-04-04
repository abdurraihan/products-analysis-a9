import React from 'react';
import useReview from '../../Hook/useReview';



const Reviews = () => {

    const [review , setReview] = useReview();
    return (
        <div>
            <h1>This is revew page {review.length}</h1>
        </div>
    );
};

export default Reviews;<h1>This is revew page</h1>