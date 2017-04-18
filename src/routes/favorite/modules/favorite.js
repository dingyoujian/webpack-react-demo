// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const GET_NODES_TODO = 'GET_NODES_TODO'

// ------------------------------------
// Actions
// ------------------------------------
export function addTodo (value) {
  return {
    type    : ADD_TODO,
    payload : value
  }
}

export const completeTodo = (index) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COMPLETE_TODO,
          payload : index
        })
        resolve()
      }, 200)
    })
  }
}
// export function getNodesTodo () {
//   return {
//     type    : GET_NODES_TODO,
//     payload : [{name:'进击的巨人2-自由之翼'},{name:'夏目友人帐6'}]
//   }
// }
export const getNodesTodo = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : GET_NODES_TODO,
          payload : [
              {name:'进击的巨人2-自由之翼',src:'http://n1image.hjfile.cn/mh/2017/02/04/fd8f11ba9b88ad6d8111deffd7ef73db.jpg'},
              {name:'夏目友人帐6',src:'http://n1image.hjfile.cn/mh/2017/03/03/1edb6757dc23561c32b0a0c6c241425f.jpg'}]
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  addTodo,
  completeTodo,
  getNodesTodo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TODO]    : (state, action) => (
      Object.assign({}, state, {nodes: [...state['nodes'], {name: action.payload}]})
  ),
  [COMPLETE_TODO] : (state, action) => (
    Object.assign({}, state[action.payload], {
        completed: true
      }
    )
  ),
  [GET_NODES_TODO] : (state, action) => (
    // Object.assign({}, state, nodes:action.payload)
    {...state, nodes: action.payload}
  )
  // [ADD_TODO] : function(state, action) {
  //      var a = Object.assign({}, state, {nodes: [...state['nodes'], {name: action.payload}]})
  //      debugger;
  //      return state;
  //   //  return Object.assign({}, state, {nodes: action.payload})
  // }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {nodes:[]}
export default function favoriteReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
