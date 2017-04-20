import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='index-nav'>
    <IndexLink to='/' data-hover='首页' activeClassName='route--active'>
      首页
    </IndexLink>
    <Link to='/favorite' data-hover='番剧' activeClassName='route--active'>
      番剧
    </Link>
    <Link to='/counter' data-hover='留言板' activeClassName='route--active'>
      留言板
    </Link>
    <a href='http://www.bilibili.com/' data-hover='bilibili'>
      bilibili
    </a>
  </div>
)

export default Header
