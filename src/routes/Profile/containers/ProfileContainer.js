import { connect } from 'react-redux'
import { getProfile } from '../modules/profile'
import Profile from '../components/Profile'

const mapDispatchToProps = {
    getProfile
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
