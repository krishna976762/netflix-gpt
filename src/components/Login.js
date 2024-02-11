import React,{useState} from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true)

    const toogleSignForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
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
        <h1 className="font-bold text-3xl py-4">{ isSignInForm ?  'Sign In' : 'Sign UP'}</h1>
        {!isSignInForm &&
             <input
             type="text"
             placeholder="Enter your Full Name"
             className="my-4 p-4 w-full bg-gray-700"
           />
        }
        <input
          type="text"
          placeholder="Enter your Email Address"
          className="my-4 p-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="my-4 p-4 w-full bg-gray-700"
        />
        <button className="p-6 my-6 bg-red-700 w-full rounded-lg">
       { isSignInForm ?  'Sign In' : 'Sign UP'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignForm}>
       { isSignInForm ?   'New to Netflix ? Sign Up now' : 'Already register? Sign In now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
