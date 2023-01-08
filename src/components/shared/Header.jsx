import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <nav className='header__navigator'>
            <ul className='header__container'>
                <li className='header__item'><Link className='header__title' to='/'>e-commerce</Link></li>
                <div className='header__items'>
                  <li className='header__item'><Link to='/login'><i className="fa-solid fa-user"></i></Link></li>
                  <li className='header__item'><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link></li>
                  <li className='header__item'><Link to='/purchases'><i className="fa-solid fa-money-check-dollar"></i></Link></li>
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header