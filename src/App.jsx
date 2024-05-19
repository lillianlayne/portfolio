import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import Nav from './components/Nav'
import LoginScreen from './pages/LoginScreen'
import AdminScreen from './pages/AdminScreen'
import { CheckSession } from './services/auth'

function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
   <div className="App">
    <Nav />
    <main>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/login' element={<LoginScreen setUser={setUser} />}/>
        <Route path='/admin' element={<AdminScreen />}/>
      </Routes>
    </main>
   </div>
  )
}

export default App
