import React, { useState, useRef } from "react";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import checkValidateData from "../utils/Validate";
import { auth } from "../utils/FireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toogleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  }; 

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) {
      return;
    }
    //  //sign up  sign in logic

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
      )
      .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://i.pinimg.com/originals/13/1e/28/131e285249ebab86fcd86be121785be0.jpg",
          })
          .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
              })); // Corrected dispatch
              navigate("/browse");
          })
          .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
          });
  
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
      });
  }
  else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
          }));
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute text-white p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your Full Name"
            className="my-4 p-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your Email Address"
          className="my-4 p-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter your Password"
          className="my-4 p-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-6 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign UP"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up now"
            : "Already register? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
