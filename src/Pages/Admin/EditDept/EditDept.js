import React from 'react';
import { Link } from 'react-router-dom';

const EditDept = () => {
    return (
        <div>
            <div className='grid grid-rows-4 grid-flow-col gap-4 mt-20'>
            <Link to="/level1term1"><button className="btn btn-secondary">Level 1 Term 1</button></Link>
            <Link to="/level1term2"><button className="btn btn-secondary">Level 1 Term 2</button></Link>
            <Link to="/level2term1"><button className="btn btn-secondary">Level 2 Term 1</button></Link>
            <Link to="/level2term2"><button className="btn btn-secondary">Level 2 Term 2</button></Link>
            <Link to="/level3term1"><button className="btn btn-secondary">Level 3 Term 1</button></Link>
            <Link to="/level3term1"><button className="btn btn-secondary">Level 3 Term 2</button></Link>
            <Link to="/level4term1"><button className="btn btn-secondary">Level 4 Term 1</button></Link>
            <Link to="/level4term2"><button className="btn btn-secondary">Level 4 Term 2</button></Link>
        </div>
        </div>
    );
};

export default EditDept;