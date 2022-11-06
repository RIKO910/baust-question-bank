import React from 'react';
import { Link } from 'react-router-dom';

const SecondSection = () => {
    return (
        <div className='grid grid-rows-4 grid-flow-col gap-4'>
             <Link to="/dept"><button className="btn btn-secondary">CT Question</button></Link>
             <Link to="/dept"><button className="btn btn-secondary">Final Question</button></Link>
             <Link to="/dept"><button className="btn btn-secondary">Notes</button></Link>
        </div>
    );
};

export default SecondSection;