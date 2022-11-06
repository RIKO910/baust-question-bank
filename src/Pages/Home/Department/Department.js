import React from 'react';
import { Link } from 'react-router-dom';

const Department = () => {
    return (
        <div className='grid grid-rows-3 grid-flow-col gap-2'>
            <Link to='/dept/cse'><button className="btn btn-secondary">Computer Science & Engineering</button></Link>
            <Link to='/dept/cse'><button className="btn btn-secondary">Electrical and electronics Engineering</button></Link>
            <Link to='/dept/cse'><button className="btn btn-secondary">Bachelor of Business Administration</button></Link>
            <Link to='/dept/cse'><button className="btn btn-secondary">English</button></Link>
            <Link to='/dept/cse'><button className="btn btn-secondary">Civil</button></Link>
            <Link to='/dept/cse'><button className="btn btn-secondary">Mechanical Engineering</button></Link>
            
        </div>
    );
};

export default Department;