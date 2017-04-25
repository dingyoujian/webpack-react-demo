import React, {Component, PropTypes} from 'react'
import './floorHost.scss'

export default class floorHost extends Component {

    render() {
        let {messages} = this.props;
        messages = messages.map((todo, index) =>
            <div key={'message' + index} className='msg-root'>
                <div className='msg-root-src'>
                    <img src={todo.photo}></img>
                </div>
                <div className='msg-root-content'>
                    <div className='msg-root-content-user'>
                        <span className='msg-root-content-user-name'>{todo.name}</span>
                        <span className='msg-root-content-user-level'>Level {todo.level}</span>
                    </div>
                    <p>{todo.value}</p>
                    <div className='msg-root-child'></div>
                </div>
            </div>
        )
        return (
            <div>
                {messages}
            </div>
        )
    }
}

floorHost.propTypes = {
    messages: PropTypes.array.isRequired
}
