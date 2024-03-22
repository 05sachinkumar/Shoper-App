import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import {auth, provider} from '../firebase.js'    
import { useNavigate } from 'react-router-dom';

function Login(props) {   //props----info{setLoggedIn}

    const navigate = useNavigate()

    function pleaseLogIn()
    {
        // Display the pop logic
        signInWithPopup(auth, provider)
        .then(function()
        {
            // it mean the user is loggedin 
            props.info(true)
            //Logic to display the mail id and username of person that is used to login 
            const userName = auth.currentUser.displayName
            const email = auth.currentUser.email
            console.log(userName, email)

            navigate("/home")
        })
        .catch(function(err)
        {
            console.log(err)
        })

    }       
  return (
    <div style={{margin:30}}>
        <button className='btn btn-outline-primary' onClick={pleaseLogIn}>Login with Google</button>
    </div>
  )
}

export default Login;