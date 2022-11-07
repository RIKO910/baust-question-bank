import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useFirebase from '../../Hooks/useFirebase';

const Registration = () => {
  const {signInWithGoogle} =useFirebase()
    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    //   ] = useCreateUserWithEmailAndPassword(auth);

    // const handelRegister = event =>{
    //     event.preventDefault();
    //     const name =event.target.name.value;
    //     const email =event.target.email.value;
    //     const password =event.target.password.value;
    //     console.log(name,email,password)

    //   createUserWithEmailAndPassword(email, password);
    // }


    return (
        <div >
            <form  >
                <input type="text" name='name' placeholder='name' />
                <input type="email" name="email" id="" placeholder='email' />
                <input type="password" name="password" id="" placeholder='password'/>
                <input type="submit" value="submit" />
            </form>
            <button onClick={signInWithGoogle}>google login</button>
        </div>
    );
};

export default Registration;