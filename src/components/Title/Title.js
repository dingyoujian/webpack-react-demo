import React, { Component, PropTypes } from 'react'
import './Title.scss'

export default class Title extends Component {
    render() {
        let {title} = this.props

        return (
            <div className='index-title'>
                <span className='index-title-child'>{title}</span>
            </div>
        )
    }
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}
