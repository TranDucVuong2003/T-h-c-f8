import React from 'react'
import './Header.css'
import PersonIcon from './icons/PersonIcon'
import CartIcon from './icons/CartIcon'
import SearchIcon from './icons/SearchIcon'
import HeartIcon from './icons/HeartIcon'
import LogoIcon from './icons/LogoIcon'
import { useNavigate } from 'react-router'


function Header() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='header container'>
        <div className='header-logo'>
          <span style={{ position: 'relative', top: '3px' }}> <LogoIcon /></span>
          <span>Furniro</span>
        </div>

        <div className='nav-bar'>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/shop")}>Shop</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/contact")}>Contact </li>
          </ul>
        </div>
        <div className='icon-header'>
          <ul>
            <li><PersonIcon /></li>
            <li><SearchIcon /></li>
            <li><HeartIcon /></li>
            <li><CartIcon /> </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Header
