import React from 'react';
import { Link } from 'react-router-dom';

const Cse = () => {
    return (
        <div className='grid grid-rows-4 grid-flow-col gap-4'>
            <button className="btn btn-secondary"><Link to=''>Level 1 Term 1</Link></button>
            <button className="btn btn-secondary"><Link to=''>Level 1 Term 2</Link></button>
            <button className="btn btn-secondary"><Link to=''>Level 2 Term 1</Link></button>
            <button className="btn btn-secondary"><Link to=''>Level 2 Term 2</Link></button>
            <button className="btn btn-secondary"><Link to=''>Level 3 Term 1</Link></button>
            <button className="btn btn-secondary"><Link to=''>Level 3 Term 2</Link></button>
            <button className="btn btn-secondary"><Link to=''>Level 4 Term 1</Link></button>
            <button className="btn btn-secondary"><Link to=''>Level 4 Term 2</Link></button>
            
        </div>
    );
};

export default Cse;