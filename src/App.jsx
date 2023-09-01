import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import SignUp from './pages/SignUp'
// import SignIn from './pages/SignIn'
import { AuthContextProvider } from './context/AuthContext'


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} /> */}
        </Routes>
      </AuthContextProvider>

    </>
  )
}

export default App
