import React, { useState, useRef } from "react";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getAuth, } from "firebase/auth";
import { useSnackbar } from "notistack";

import Header from "./Header";
import checkValidateData from "../utils/Validate";
import { auth } from "../utils/FireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { BG_URL, USER_AVATR } from "../utils/Constants";


const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [isPasswordSet,setIspasswordSet] = useState(false)

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const forgetMail = useRef(null)

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const forgetPassword = () => {
    setIspasswordSet(true)
  };

  const backToLOgin = () =>{
    setIspasswordSet(false)
  }

  const sendForgetPassEMail = (e) =>{
    e.preventDefault();
    const email = forgetMail.current.value
    sendPasswordResetEmail(auth,email).then((data) =>{
      enqueueSnackbar("Please check your email for reset link", {
        variant: "success",
      });
    }).catch((error) => {
      // An error occurred
      enqueueSnackbar("Please check email", {
        variant: "error",
      });
    });
   
  }
  

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
            photoURL: USER_AVATR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              enqueueSnackbar(`${displayName} signed up successfully...!`, {
                variant: "success",
              });
            })
            .catch((error) => {
              // An error occurred
              enqueueSnackbar(error.message, {
                variant: "error",
              });
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          enqueueSnackbar(errorCode + "-" + errorMessage, {
            variant: "error",
          });
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        getAuth(),
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          enqueueSnackbar(`${displayName} signed in successfully...!`, {
            variant: "success",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          enqueueSnackbar(errorCode + "-" + errorMessage, {
            variant: "error",
          });
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form className="absolute text-white p-8 bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0  rounded-lg bg-opacity-80">
      {isPasswordSet ? <div>
        <h1 className="font-bold text-2xl py-4">
         Forget Password
        </h1>
        <input
          ref={forgetMail}
          type="text"
          placeholder="Enter your Email Address"
          className="my-3 p-3 w-full bg-gray-700"
        />
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={sendForgetPassEMail}
        >
          Send Reset URL
        </button>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={backToLOgin}
        >
          Back
        </button>
      </div> 
:
       <>
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your Full Name"
            className="my-2 p-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your Email Address"
          className="my-2 p-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter your Password"
          className="my-2 p-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignForm}>
          {isSignInForm
            ?<>New to Netflix ?<span className="text-blue-500 ml-1">Sign Up now</span></>
            :<>Already register ?<span className="text-blue-500 ml-1">Sign In now</span></>
             }
        </p>
        {isSignInForm && (
          <p
            style={{ width: "118px" }}
            className="py-1 cursor-pointer pt-0 text-blue-500"
            onClick={forgetPassword}
          >
            Forget Password
          </p>
        )}
        </>
        
        
        
        }
      </form>
    </div>
  );
};

export default Login;
