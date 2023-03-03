/**
 * npx create-react-app frontend --template redux
 */

/**
 * //creates react applicarion in a frontend folder and using redux template
 * npx create-react-app frontend --template redux
 * 
 * //npm run client 
 * change scripts from package.json from the root. "client": "npm start --prefix frontend" 
 * 
 * cd frontend
 * npm i react-router-dom
 * npm i react-icons
 * 
 * //so we can run more than on script at the same time
 * root
 * npm i -D concurrently
 * 
 * cd frontend 
 * npm i axios react-toastify
 */


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App