import React, { Component, PropTypes } from 'react'
import './Profile.scss'
import Title from '../../../components/Title'
import Head from './Head/Head'

export default class Profile extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getProfile();
    }
    render() {
        let { profile } = this.props
        return (
            <div>
                <Title title='个人信息' />
                <Head profile={profile}/>
            </div>
        )
    }
}
Profile.propTypes = {

}
