import React, { Component } from 'react'

export default class Login extends Component {

    handleSubmit() {
        debugger;
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="用户名" />
                <input type="text" placeholder="密码" />
                <button type="submit">登录</button>
            </form>
        )
    }
}
