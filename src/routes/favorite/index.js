import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'favorite',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Favorite = require('./containers/FavoriteContainer').default
      const reducer = require('./modules/favorite').default
      injectReducer(store, { key: 'favorite', reducer })
      cb(null, Favorite)
    })
  }
})
