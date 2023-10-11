import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/Firebase';
import {Link,useNavigate} from "react-router-dom";
// import "./login.css"
import gog from "./gog.jpg"

const Registes = () => {
  const firebase = useFirebase();
  console.log(firebase);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    if(firebase.isLogedIn){
        navigate("/home");
    }
},[firebase,navigate])

const switc=()=>{
  navigate("./login")

}

const GooglehandleSubmit = () => {
  firebase.singinWithGoogle();

};
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission
  try {
      await firebase.SigninUserWithEmailandPassword(email, password);
      // console.log('Login successful.');
      // toast("Wow so easy!");
  } catch (error) {
      console.log('Login failed:', error);
  }
};


  const handelSumbit = async (e) => {
    e.preventDefault();


    try {
      await firebase.SignupUserWithEmailandPassword(email, password);
      console.log('Account created successfully.');
    } catch (e) {
      console.log('Error:', e);

    }
  };

  return (
    <div>
      {/* <h2>Create Account</h2>
      <form onSubmit={handelSumbit}>
        <div className="inputBox">
          <input
            type="text"

            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </div>
        <div className="inputBox">
          <input
            type="password"

            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </div>

        <div className="inputBox">
          <button type="submit">Create Account</button>
        </div>
      </form>
      <h1>
                    or
                </h1>

                <button onClick={firebase.singinWithGoogle}>singin with google</button>
      
      

      <a href='http://localhost:3000/login'>login a/c</a> */}

      <block>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <div className="signin">

                    <form className="content" onSubmit={handelSumbit}>
                        <h2>Sign Up</h2>

                        <div className="form">
                            <div className="inputBox">
                                <input
                                    type="text"
                                    required
                                  

                                    // placeholder="Email"

                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} />
                                <i>Email</i>
                            </div>
                            <div className="inputBox">

                                <input
                                    type="password"

                                    // placeholder="Password"

                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required />
                                <i>Password</i>
                            </div>
                            {/* <div className="links">
                                <a href="#">Forgot Password</a>
                                <a href="#">Signup</a>
                            </div> */}
                            <div className="inputBox">
                                <input type="submit" value="Create Account" />
                                <div className='btn-gog'>
                                  
                                <div onClick={GooglehandleSubmit} id='google' value="Continue with Google" >Continue with Google</div>
                                <img className='gog-img' src={gog}></img>
                                </div>
                            </div>

                            <div href='http://localhost:3000/login'  onClick={switc}  className='switch'>Login Account</div>

                        </div>
                    </form>
                </div>


          


            </block >

    </div>
  );
};

export default Registes;
