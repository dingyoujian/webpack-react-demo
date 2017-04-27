import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import ConnorGif from '../assets/Kangna3.gif'
import './LoginPage.scss'

export default class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            currentId: 'login'
        }
    }
    tabClick(id) {
        this.setState({
            currentId: id
        })
    }
    render() {
        const tabs = [
            <a key={'tabBtnl'} className={this.state.currentId === 'login' ? 'active' : ''} onClick={() => this.tabClick('login')}>登录</a>,
            <a key={'tabBtnr'} className={this.state.currentId === 'register' ? 'active' : ''} onClick={() => this.tabClick('register')}>注册</a>
        ]
        const tabChild = [
            <div key={'loginTab'} style={{"display": this.state.currentId === 'login' ? 'block' : 'none'}}>
                <Login />
            </div>,
            <div key={'registerTab'} style={{"display": this.state.currentId === 'register' ? 'block' : 'none'}}>
                <Register onSuccess={
                    id => this.tabClick(id)
                }/>
            </div>
        ]
        return (
            <div className="loginPage">
                <img
                   alt='Connor'
                   className='loginPage-logo'
                   src={ConnorGif} />
                <div className="loginPage-tabs">
                    {tabs}
                </div>
                {tabChild}
            </div>
        )
    }
}
