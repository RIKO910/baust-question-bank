import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import Footer from '../../shared/Footer/Footer';

const AdminHome = () => {
    const { signInWithGoogle, user } = useFirebase()
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">At first you need simple google sign in then you need to go service provide button .After your providing question or notes you can signing out </p>
                        {/* <button className="btn btn-primary"><Link to="/dept">Service</Link></button> */}
                        {
                            user?.uid
                                ?
                                <Link to='/editDept'> <button className="btn btn-primary">Go to provide service</button></Link>
                                :
                                <button onClick={signInWithGoogle} className="btn btn-primary">google Sign In</button>
                        }

                    </div>
                </div>
            </div>
            <Footer>
                
            </Footer>
        </div>
    );
};

export default AdminHome;