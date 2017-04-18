import { connect } from 'react-redux'
import { addTodo, completeTodo, getNodesTodo } from '../modules/favorite'

import Favorite from '../components/Favorite'

const mapDispatchToProps = {
  addTodo,
  completeTodo,
  getNodesTodo
}

const mapStateToProps = (state) => ({
  nodes : state.favorite.nodes
})


export default connect(mapStateToProps, mapDispatchToProps)(Favorite)
