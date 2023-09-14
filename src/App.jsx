import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router.jsx'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { user_token } from './store/actions/userActions.js'


function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    let url = `http://localhost:7000/api/auth/token`
    let token = localStorage.getItem('token')
    if (token) {
      let configs = { headers: { 'Authorization': `Bearer ${token}` } }
      axios.post(url, null, configs)
        .then(response => dispatch(user_token(response.data.user)))
        .catch(err => console.log(err))
    }

  }, [])

  return (
   <RouterProvider router = {router}/>
  )
}

export default App