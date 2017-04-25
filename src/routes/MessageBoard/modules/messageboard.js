// ------------------------------------
// Constants
// ------------------------------------
export const GET_MESSAGE = 'GET_MESSAGE'
export const ADD_MESSAGE = 'ADD_MESSAGE'

// ------------------------------------
// Actions
// ------------------------------------
export const addMessage = (value) => {
    return {
      type    : ADD_MESSAGE,
      payload : value
    }
}

export const getMessage = () => {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: GET_MESSAGE,
                    payload: [{name: 'dyj', photo: '//i2.hdslb.com/bfs/face/c863184762be88ea07e388e2b1fa27fa192e47a5.jpg@52w_52h.webp',
                     value: '第一个评论',level: 1, startTime: 1492737920404, children:[]},
                    {name: 'DDYYJJ', photo: '//i2.hdslb.com/bfs/face/c863184762be88ea07e388e2b1fa27fa192e47a5.jpg@52w_52h.webp',
                     value: '第2个评论',level: 2, startTime: 1492737920404, children:[]},
                    {name: 'DDYYJJ', photo: '//i2.hdslb.com/bfs/face/c863184762be88ea07e388e2b1fa27fa192e47a5.jpg@52w_52h.webp',
                     value: '第3个评论',level: 3, startTime: 1492737920404, children:[]},
                    {name: 'DDYYJJ', photo: '//i2.hdslb.com/bfs/face/c863184762be88ea07e388e2b1fa27fa192e47a5.jpg@52w_52h.webp',
                     value: '第4个评论',level: 4, startTime: 1492737920404, children:[]},
                    {name: 'DDYYJJ', photo: '//i2.hdslb.com/bfs/face/c863184762be88ea07e388e2b1fa27fa192e47a5.jpg@52w_52h.webp',
                     value: '第5个评论',level: 5, startTime: 1492737920404, children:[]},
                    {name: 'DDYYJJ', photo: '//i2.hdslb.com/bfs/face/c863184762be88ea07e388e2b1fa27fa192e47a5.jpg@52w_52h.webp',
                     value: '第6个评论',level: 6, startTime: 1492737920404, children:[]},
                    {name: 'DDYYJJ', photo: '//i2.hdslb.com/bfs/face/c863184762be88ea07e388e2b1fa27fa192e47a5.jpg@52w_52h.webp',
                     value: '第7个评论',level: 7, startTime: 1492737920404, children:[]}]
                })
                resolve()
            }, 200)
        })
    }
}

export const actions = {
    getMessage,
    addMessage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [GET_MESSAGE] : (state, action) => (
        Object.assign({}, state, {messages: action.payload})
    ),
    [ADD_MESSAGE] : (state, action) => {
        debugger;
    }
    // [GET_MESSAGE] : function(state, action) {debugger;
    //      var a = Object.assign({}, state, {messages: action.payload})
    //      debugger;
    //      return a;
    //   //  return Object.assign({}, state, {nodes: action.payload})
    // }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {messages: []}
export default function messageboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
