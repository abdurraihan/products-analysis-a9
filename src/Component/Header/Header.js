import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <nav className='text-3xl flex justify-center  p-4 '>
              <Link className='mx-5  hover:bg-orange-200 ' to='/home' >Home</Link>
              <Link  className='mx-5  hover:bg-orange-200 ' to='/reviews' >Reviews</Link>
              
              <Link  className='mx-5  hover:bg-orange-200 ' to='/dashboard' >Dashboard</Link>
              <Link  className='mx-5  hover:bg-orange-200 ' to='blogs' >Blogs</Link>
              <Link  className='mx-5  hover:bg-orange-200 ' to='/about'>About</Link>
              
           </nav>
        </div>
    );
};

export default Header;<h1>This is header</h1>