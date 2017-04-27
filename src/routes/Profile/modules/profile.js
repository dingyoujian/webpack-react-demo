//------------------------------------
// Constants
//------------------------------------
export const GET_PROFILE = 'GET_PROFILE'

//------------------------------------
// Actions
//------------------------------------

export const getProfile = (userId) => {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            fetch('api/users/10').then(
                res => res.json()
            ).then(
                res => {
                    dispatch({
                        type    : GET_PROFILE,
                        payload : res
                    })
                    resolve()
                }
            ).catch(e => {
                window.alert(e);
            })
        })
    }
}

export const actions = {
    getProfile
}
//------------------------------------
// Action Handlers
//------------------------------------
const ACTION_HANDLERS = {
    [GET_PROFILE] : (state, action) => (
        Object.assign({}, state, action.payload)
    )
}

//------------------------------------
// Reducer
//------------------------------------
const initialState = {}
export default function profileReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
