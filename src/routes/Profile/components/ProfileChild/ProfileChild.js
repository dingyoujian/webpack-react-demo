import React, {Component, PropTypes} from 'react'
import './ProfileChild.scss'

export default class ProfileChild extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <input className="profileChild" value={this.props.content} placeholder={this.props.prompt} />
        )
    }
}

ProfileChild.propTypes = {

}
