import React from 'react';
import useReview from '../../Hook/useReview';
import Review from '../Review/Review';



const Reviews = () => {

    const [reviews , setReview] = useReview();
    return (
        <div className='flex m-4 p-5 justify-between items-end'>
          

            {
                reviews.map(review => <Review key={review.id} review={review} ></Review>)
            }
        </div>
    );
};

export default Reviews;<h1>This is revew page</h1>