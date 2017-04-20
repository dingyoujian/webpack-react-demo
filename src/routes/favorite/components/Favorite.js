import React, { Component, PropTypes } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import './Favorite.scss'
import Title from '../../../components/Title'

export default class Favorite extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.getNodesTodo();
  }

  render() {
    const {addTodo, completeTodo, nodes} = this.props
    return (
      <div>
        <Title title='新番推荐'/>
        <TodoList
            onTodoClick={
                index => completeTodo(index)
            }
            nodes={nodes}
        />
      </div>
    )
  }
}
// <AddTodo
//     onAddClick={
//         text => addTodo(text)
//     }
// />

Favorite.propTypes = {
  nodes        : PropTypes.array.isRequired,
  completeTodo : PropTypes.func.isRequired,
  addTodo      : PropTypes.func.isRequired,
  getNodesTodo : PropTypes.func.isRequired
}
