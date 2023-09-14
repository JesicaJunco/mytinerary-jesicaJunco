import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { user_signup } from '../store/actions/userActions.js'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function FormSignUp() {
  const [countryData, setCountryData] = useState([]);
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password : '',
    image:'',
    country: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const countries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all?fields=name');
            setCountryData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    countries();
}, []);
  const handleInput = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  console.log(formData);
  const handleSignUp = async(e) =>{
    e.preventDefault();
    try {
      dispatch(user_signup({
        data: formData
      })) 
      Swal.fire({
        icon: 'success',
        title: 'Great!',
        text: 'User registered!',
        footer: '<a href="/signin">Please Sign In</a>'
    })
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
                      Sign Up and find your perfect trip!
                    </h4>
                  </div>
                  <form onSubmit={handleSignUp}>
                    <p className="mb-4 text-center">Please complete the form</p>
                    <input onChange={handleInput} type="text" name='name' className="mb-4 text-black text-center w-full rounded-md" placeholder='Enter your name'/>
                    <input onChange={handleInput} type="email" label="email" name='email' className="mb-4 text-black text-center w-full rounded-md" placeholder='Email Adress' />
                    <input onChange={handleInput} type="password" name='password' className="mb-4 text-center text-black w-full rounded-md" placeholder='Password'/>
                    <input onChange={handleInput} type="text" name='image' className="mb-4 text-center text-black w-full rounded-md" placeholder='Enter a URL '/>
                    <label htmlFor="country">
                        <p className="font-medium text-white pb-2">Select your country</p>
                        <select onChange={handleInput} id="country" name="country" className="w-full text-black py-1 border border-slate-300 rounded-md px- mb-1 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Select one...">
                                <option value='' hidden>Select one...</option>
                                {
                                  countryData?.sort((a, b) => a.name.common.localeCompare(b.name.common))
                                      .map((country) => (
                                          <option key={country.name.common} value={country.name.common}>
                                              {country.name.common}
                                          </option>
                                  ))
                                }
                        </select>
                    </label>
                    <div className="mb-12 pb-1  text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' text-white "
                          type="button" onClick={handleSignUp}>Sign Up 
                        </button>
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
