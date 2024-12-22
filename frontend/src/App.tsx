
import './App.css'
import Dashboard from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import LandingPage from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  </BrowserRouter>
}

export default App
