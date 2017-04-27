import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Login extends Component {

    handleSubmit(e) {
        e.preventDefault()

        window.sessionStorage.setItem('isAuth', true)
        window.sessionStorage.setItem('profile', {
            userId: 10
        })
        browserHistory.push('/profile')

        // fetch('api/users', {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     body: "userName=" + userName + "&password=" + password + "&phone=" + phone
        //
        // })
        // .then(res => res.json())
        // .then(res => {
        //     window.alert('登录成功')
        // })
        // .catch(function(e) {
        //     window.alert(e);
        // });
    }
    render() {

        return (
            <form id="Login">
                <input type="text" ref="userName" placeholder="用户名" />
                <input type="text" ref="password" placeholder="密码" />
                <button type="submit" onClick={(e) => this.handleSubmit(e)}>登录</button>
            </form>
        )
    }
}
