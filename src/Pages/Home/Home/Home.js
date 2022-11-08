import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">This is BAUST question bank.Here we provide only CSE Department .If you need a question or notes press questions and notes button .And if you want to provide a questions or notes press admin button</p>
                        {/* <button className="btn btn-primary"><Link to="/dept">Service</Link></button> */}
                        <Link to="/dept"><button className="btn btn-primary">Question & Notes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;