import React from 'react'
import './HomeView.scss'
import Title from '../../../components/Title'

export const HomeView = () => (
    <div>
      <Title title='新番介绍'/>
      <embed src='//static.hdslb.com/miniloader.swf?aid=8510819&page=1'
        width='600' height='400' allowFullScreen='true'
        type='application/x-shockwave-flash'/>
    </div>
)

export default HomeView
