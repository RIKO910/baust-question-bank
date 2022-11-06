import React from 'react';
import { Link } from 'react-router-dom';

const Department = () => {
    return (
        <div className='grid grid-rows-4 grid-flow-col gap-4'>
            <button className="btn btn-secondary"><Link to='/dept/cse'>CSE</Link></button>
            <button className="btn btn-secondary">Button</button>
            <button className="btn btn-secondary">Button</button>
            <button className="btn btn-secondary">Button</button>
        </div>
    );
};

export default Department;