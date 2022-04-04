import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hook/useReview';
import Review from '../Review/Review';

import './Home.css';




const Home = () => {

  const [reviews , setReview] = useReview();



const navigate = useNavigate();

  const GoForeMoreReviews = () =>{
    const path = `/reviews`
   navigate(path);

}


    return (

      <div> 
        <div className='flex justify-between mx-7 '>

          <div className='w-1/4'> 

          <img width="100%" src='./image/book.avif'  alt="book-img" />

          </div>
         

          <div className=' w-2/3  m-4 p-6'>
              <h1 className='text-9xl  mb-7'> Best Book For MotiVation </h1>
              <h2 className='text-7xl mb-14'> You must should read it....</h2>

              <p className='text-4xl text-[#c95555]'> For over 60 years the rock-solid , time-tested advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives</p>
          </div>
          
        </div>

        

          

        <div >

          <h1 className='my-16 text-center text-7xl  ' > Reviews :({reviews.length}) <span className='text-2xl'>Fore more... just click the button </span>  </h1>
          
          <div className='flex justify-evenly'> 
          {

          reviews.slice(0,3).map( review => <Review review={review}> </Review>)
      
          }
        </div>
          <button onClick={GoForeMoreReviews} className='home-button'>Go For More Reviews</button>
        </div>


        </div>
    );
};

export default Home;<h3> This is home</h3>