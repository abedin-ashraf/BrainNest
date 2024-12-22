
import './App.css'
import Dashboard from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import LandingPage from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    <Analytics />
  </div>
}

export default App
