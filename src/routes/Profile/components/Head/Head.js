import React, {Component, PropTypes} from 'react'
import './Head.scss'

export default class Head extends Component {
    constructor() {
        super()
    }
    render() {
        let { headSrc = '//static.hdslb.com/images/member/noface.gif' } = this.props.profile
        return (
            <div>
                <img
                   alt='headSrc'
                   className='headSrc'
                   src={headSrc} />
            </div>
        )
    }
}

Head.propTypes = {

}
