import { createAction } from "@reduxjs/toolkit";

const user_photo = createAction('user_photo', (obj) => {
    console.log(obj)

    return {
        payload: {
            photo: obj.photo
        }
    }
})

export default user_photo;