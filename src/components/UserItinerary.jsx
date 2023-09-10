import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_user_by_id } from '../store/actions/userActions'


export default function UserItinerary({id}) {
    const user = useSelector((store) => store.userReducer.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(get_user_by_id(id)) 
    },[])
  return (
    <>
    <div className="container">
        <img src={user.image} className='rounded-full h-24' />
        <h2 className='text-md '>{user.name}</h2>  
    </div>
    </>
  )
}