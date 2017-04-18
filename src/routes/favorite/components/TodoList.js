import React, { Component, PropTypes } from 'react'

export default class TodoList extends Component {
  // constructor() {
  //
  // }
  render() {
    let { onTodoClick, nodes } = this.props
    nodes = nodes.map((todo, index) =>
      <li key={'todolist' + index}>
        <img className='favorite-list-img' src={todo.src} alt />
        <span className='favorite-list-alt'>{todo.name}</span>
      </li>
    )

    return (
      <ul className='favorite-list'>
        {nodes}
      </ul>
    )
  }
}
TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  nodes: PropTypes.array.isRequired
}
