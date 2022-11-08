import React from 'react';
import { Link } from 'react-router-dom';

const Department = () => {
    return (
        <div className='grid grid-rows-3 grid-flow-col gap-2 mt-28 mr-5 ml-5'>
            <Link to='/dept/cse'><button className="btn btn-secondary  px-14">Computer Science & Engineering</button></Link>
            <Link to='#'><button className="btn btn-secondary px-7">Electrical and electronics Engineering</button></Link>
            <Link to='#'><button className="btn btn-secondary px-9">Bachelor of Business Administration</button></Link>
            <Link to='#'><button className="btn btn-secondary px-20 lg:px-40">English</button></Link>
            <Link to='#'><button className="btn btn-secondary px-24 lg:px-44">Civil</button></Link>
            <Link to='#'><button className="btn btn-secondary px-5 lg:px-24">Mechanical Engineering</button></Link>
            
        </div>
    );
};

export default Department;