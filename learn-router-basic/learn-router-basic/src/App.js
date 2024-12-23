import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import './App.css'
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'

function App() {
  return (
    <div className='app'>
      
      <nav>
        <ul style={{listStyle:'none'}}>
          <li>
            <Link to = '/'>Home</Link>
            </li>
          <li>
            <Link to = '/News'>News</Link>
            </li>
          <li>
            <Link to = '/Contact'>Contact</Link>
            </li>

        </ul>
      </nav>
  
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/News' element={<NewsPage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}

export default App
