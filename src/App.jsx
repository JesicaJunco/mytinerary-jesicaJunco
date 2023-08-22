import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router.jsx'

function App() {
  return (
    <>
     {/*<Layouts>
     <Welcome/>
  </Layouts>*/}
     <RouterProvider router = {router}/>
    </>
  )
}

export default App
