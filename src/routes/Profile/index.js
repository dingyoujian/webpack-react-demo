import { injectReducer } from '../../store/reducers'
import common from '../../common/common'

export default (store) => ({
    path : 'profile',
    onEnter: common.auth,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            const Profile = require('./containers/ProfileContainer').default
            const reducer = require('./modules/profile').default
            injectReducer(store, { key: 'profile', reducer })
            cb(null, Profile)
        })
    }
})
