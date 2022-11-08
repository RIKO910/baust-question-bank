import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        
            <div className="navbar bg-base-100 sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li>   <span>{user?.displayName && <Link to='/admin'>Admin</Link>}</span></li>
                        {
                            user?.uid
                                ?
                                <li><button onClick={handleSignOut}>sign out</button></li>
                                :
                                <li><Link to='/admin'>Admin</Link></li>
                        }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">BAUST QUESTION BANK</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal mr-5 p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li>   <span>{user?.displayName && <Link to='/admin'>Admin</Link>}</span></li>
                        {
                            user?.uid
                                ?
                                <li><button onClick={handleSignOut}>sign out</button></li>
                                :
                                <li><Link to='/admin'>Admin</Link></li>
                        }
                    </ul>
                </div>

            </div>
        
    );
};

export default Header;