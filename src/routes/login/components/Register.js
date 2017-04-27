import React, { Component } from 'react'

export default class Register extends Component {

    handleSubmit(e) {
        e.preventDefault()
        let formData = new FormData()
        const userName = this.refs.userName.value
        const password = this.refs.password.value
        const phone = this.refs.phone.value
        fetch('api/users', {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "userName=" + userName + "&password=" + password + "&phone=" + phone

        })
        .then(res => res.json())
        .then(res => {
            window.alert('注册成功')
            this.props.onSuccess('login')
        })
        .catch(e => {
            window.alert(e);
        })
    }
    render() {

        return (
            <form id="Register">
                <input type="text" ref="userName" placeholder="用户名" />
                <input type="text" ref="password" placeholder="密码" />
                <input type="number" ref="phone" placeholder="手机号" />
                <button type="submit" onClick={(e) => this.handleSubmit(e)}>注册</button>
            </form>
        )
    }
}
