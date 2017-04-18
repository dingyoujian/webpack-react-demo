import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='index-nav'>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    <Link to='/favorite' activeClassName='route--active'>
      favorite
    </Link>
    <Link to='/counter' activeClassName='route--active'>
      profile
    </Link>
    <a href='http://www.bilibili.com/'>
      bilibili
    </a>
  </div>
)

export default Header
