import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import { user_signout } from "../store/actions/userActions";

export default function ButtonAvatar() {
  const user = useSelector(store => store.userReducer.user);
  
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      const token = localStorage.getItem('token');
      dispatch(user_signout(token, user));
    } catch (error) {
      console.log(error);
    }
  };
  const defaultImage =
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

  return (
    <>
      {user? 
        <button
          onClick={handleSignout}
          className="flex rounded-full border-white border-1 m-1 bg-sky-600 hover:bg-cyan-500 px-4  text-white font-bold drop-shadow-darkShadow hover:drop-shadow-lightShadow lg:flex "
        >
          SignOut
        </button>
      : 
        <LinkRouter
          to="/signin"
          className="flex rounded-full border-white border-1 drop-shadow-darkShadow hover:drop-shadow-lightShadow "
        >
        </LinkRouter>
      }
      <img
            className="w-7 h-7 fill-black stroke-sky-500 md:ml-2 mr-1 rounded-3xl"
            src={user? user.image : defaultImage}/>
    </>
  );
}
