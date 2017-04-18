import React from 'react'
import ConnorGif from '../assets/Kangna3.gif'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='Connor'
      className='duck'
      src={ConnorGif} />
  </div>
)

export default HomeView
