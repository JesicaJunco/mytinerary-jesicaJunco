import React from "react";
import { useSelector } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'


export default function ButtonAvatar() {
  const photo = useSelector(store => store.userReducer.photo )
  return (
    <>
      <LinkRouter to='/signin' className="flex rounded-full border-white border-1 drop-shadow-darkShadow hover:drop-shadow-lightShadow "> 
        <p className='hidden md:flex drop-shadow-darkShadow'>Login</p>
        <img className="w-7 h-7 fill-black stroke-sky-500 md:ml-2 mr-1 rounded-3xl" src={photo} alt="" /> 
      </LinkRouter>
    </>
  )
}
