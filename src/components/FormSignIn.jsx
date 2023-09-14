import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user_signin } from '../store/actions/userActions.js'
import { Link as LinkRouter } from 'react-router-dom'
import axios from 'axios'
import { GoogleSignIn } from './GoogleSignIn.jsx'

export default function FormSignIn() {
  const store = useSelector(store => store.userReducer)
  console.log(store);
  const [formData, setFormData] = useState({
    email: '',
    password : ''
  });
  
  const dispatch = useDispatch();

  const handleInput = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  console.log(formData);
  const handleSignIn = async (event) =>{
    event.preventDefault();
    try {
      dispatch(user_signin({
        data: formData
      })) 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="h-[85vh] bg-signInBg bg-cover">
      <div className=" p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="md:w-6/12">
            <div className="rounded-lg bg-sky-800 ">
              <div className="px-4 md:px-0 ">
                <div className=" md:p-12">
                  <div className="text-center">
                    <img className="mx-auto w-60" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"/>
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      Sign In and find your perfect trip!
                    </h4>
                  </div>
                  <form onSubmit={handleSignIn}>
                    <p className="mb-4 text-center">Please login to your account</p>
                    <input onChange={handleInput} type="email" label="email" name='email' className="mb-4 text-center text-black w-full rounded-md" placeholder='Email Adress' />
                    <input onChange={handleInput} type="password" name='password' className="mb-4 text-center text-black w-full rounded-md" placeholder='Password'/>
                    <div className='flex justify-center mb-2'>
                    <GoogleSignIn  /></div>
                    <div className="mb-12 pb-1  text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' text-white "
                          type="button" onClick={handleSignIn}>Sign in 
                        </button>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                        <LinkRouter to='/signup'
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"> 
                          Sign Up
                        </LinkRouter>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
