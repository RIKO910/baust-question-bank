import React from 'react';
import { Link } from 'react-router-dom';

const Cse = () => {
    return (
        <div className='grid grid-rows-4 grid-flow-col gap-4 mt-20'>
            <Link to="/show11"><button className="btn btn-secondary">Level 1 Term 1</button></Link>
            <Link to="/show12"><button className="btn btn-secondary">Level 1 Term 2</button></Link>
            <Link to="/show21"><button className="btn btn-secondary">Level 2 Term 1</button></Link>
            <Link to="/show22"><button className="btn btn-secondary">Level 2 Term 2</button></Link>
            <Link to="/show31"><button className="btn btn-secondary">Level 3 Term 1</button></Link>
            <Link to="/show32"><button className="btn btn-secondary">Level 3 Term 2</button></Link>
            <Link to="/show41"><button className="btn btn-secondary">Level 4 Term 1</button></Link>
            <Link to="/show42"><button className="btn btn-secondary">Level 4 Term 2</button></Link>
        </div>
    );
};

export default Cse;