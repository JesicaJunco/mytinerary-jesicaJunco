import { createReducer } from "@reduxjs/toolkit";
import { get_user_by_id, user_signin, user_signin_google, user_signout, user_signup, user_token } from '../actions/userActions';

const initialState = {
    user: null,
    token: null
}
const userReducer = createReducer (initialState, (builder)=>
    builder 
        .addCase(get_user_by_id.fulfilled, (state, action)=>{
            return{
                ...state,
                user: action.payload.user
            }
        })
        .addCase(user_signin.fulfilled, (state, action)=>{
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_signup.fulfilled, (state, action)=>{
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_signin_google.fulfilled, (state, action)=>{
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_signout, () => {
            return {
                user: null,
                token: null
            }
        })
        .addCase(user_token, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
            }
        })
)
export default userReducer
