import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const user_photo = createAction('user_photo', (obj) => {
    console.log(obj)

    return {
        payload: {
            photo: obj.photo
        }
    }
})

export const get_user_by_id = createAsyncThunk('get_user_by_id', async (id) =>{
    try {
         const response = await axios.get(`http://localhost:7000/api/users/${id}`)
        return {
            user: response.data.user
        }
    } catch (error) {
        return{ 
            user: []
        }
    }
})