import React, { Component, PropTypes } from 'react'
import './MessageBoard.scss'
import Title from '../../../components/Title'
import FloorHost from './floorHost/floorHost'
import { Auth } from '../../../enhance/auth'

class MessageBoard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getMessage();
    }
    render() {
        const {messages} = this.props
        return (
          <div>
            <Title title='留言板'/>
            <FloorHost messages={messages} />
          </div>
        )
    }
}
MessageBoard.propTypes = {
    
}
export default Auth(MessageBoard);
