import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const AdminHome = () => {
    const {signInWithGoogle ,user} =useFirebase()
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* <button className="btn btn-primary"><Link to="/dept">Service</Link></button> */}
                        { 
                                user?.uid
                                ?
                                <Link to='/level1term1'> <button className="btn btn-primary">Go to provide service</button></Link>
                                :
                                <button onClick={signInWithGoogle} className="btn btn-primary">google Sign In</button>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default AdminHome;