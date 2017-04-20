import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'messageboard',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Favorite = require('./containers/MessageBoardContainer').default
      const reducer = require('./modules/messageboard').default
      injectReducer(store, { key: 'messageboard', reducer })
      cb(null, MessageBoard)
    })
  }
})
