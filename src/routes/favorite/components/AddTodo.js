import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
  // constructor() {
  //
  // }
  handleClick(e) {
    const node = this.refs.input.value
    this.props.onAddClick(node)
  }

  render() {
    return (
      <div>
        <input type="text" ref='input'/>
        <button onClick={(e) => this.handleClick(e)}>ADD</button>
      </div>
    )
  }
}
AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
