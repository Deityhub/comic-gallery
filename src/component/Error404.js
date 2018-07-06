import React from 'react';
import { Link } from 'react-router-dom';

import './Error404.css'

//add navigation link here to get back to home page
const Error404 = () => {
    return (
        <div className='error'>
            <h2>Sorry Page cannot be found</h2>

            <Link className='error-btn'>Go Back Home</Link>
        </div>
    )
}

export default Error404;