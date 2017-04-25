import React, { Component } from 'react'

export const Auth = (ComposedComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: true
        }
    }

    render() {
        return <ComposedComponent {...this.props} isAuth={this.state.isAuth}/>
    }
}
