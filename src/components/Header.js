import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/FireBase';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from '../utils/Constants'

const Header = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Clean-up function
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <>
      <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-36' src={LOGO}
          alt="logo" />

        {user && (
          <div className='flex p-2'>
            <img className='w-12 h-12' src={user?.photoURL}
              alt="user icon" />
            <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
          </div>
        )}

      </div>
    </>
  );
}

export default Header;
