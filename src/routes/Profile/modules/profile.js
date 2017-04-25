//------------------------------------
// Constants
//------------------------------------


//------------------------------------
// Actions
//------------------------------------


//------------------------------------
// Action Handlers
//------------------------------------
const ACTION_HANDLERS = {

}

//------------------------------------
// Reducer
//------------------------------------
const initialState = {}
export default function profileReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
