import React, { Component, PropTypes } from 'react'
import './Profile.scss'
import Title from '../../../components/Title'

export default class Profile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Title title='个人信息' />
            </div>
        )
    }
}
Profile.propTypes = {

}
