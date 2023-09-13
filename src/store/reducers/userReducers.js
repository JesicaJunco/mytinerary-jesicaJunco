import { createReducer } from "@reduxjs/toolkit";
import { get_user_by_id, user_photo } from '../actions/userActions';

const initialState = {
    user:{},
    name: 'Random name',
    photo: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
        .addCase(get_user_by_id.fulfilled,
            (state, action)=>{
                return{
                    ...state,
                    user: action.payload.user
                }
        })
)

export default userReducer