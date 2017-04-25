import { connect } from 'react-redux'
import { getMessage } from '../modules/messageboard'
import MessageBoard from '../components/MessageBoard'

const mapDispatchToProps = {
    getMessage
}

const mapStateToProps = (state) => ({
    messages : state.messageboard.messages
})


export default connect(mapStateToProps, mapDispatchToProps)(MessageBoard)
