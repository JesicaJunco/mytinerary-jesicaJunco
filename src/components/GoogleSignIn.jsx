import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef } from 'react'
import { user_signin_google } from '../store/actions/userActions.js'

export const GoogleSignIn = () => {
    const googleButton = useRef()
    const store = useSelector(store => store.userReducer)
    const dispatch = useDispatch();
    const handleCredentialResponse= async(response)=> {
        const data= {
            token_id : response.credential
        }
        try {
            dispatch(user_signin_google({
              data
            })) 
          } catch (error) {
            console.log(error);
          }
      }
    
    useEffect(()=>{
      if (window.google) {
        window.google.accounts.id.initialize({
              client_id: "113209228887-ltcvi03to75kckb62au3sumip3g5r9v2.apps.googleusercontent.com",
              callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
              googleButton.current,
              { 
                type : "standard",
                shape: "rectangular",
                theme: "outline", 
                text:"signin_with",
                size: "medium",
                logo_alignment:"left" 
              }  
            )
          }
    }, [])

  return (
    <div ref = {googleButton}></div> 
  )
}
