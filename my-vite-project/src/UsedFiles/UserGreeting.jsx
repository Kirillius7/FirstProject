import PropTypes from "prop-types"
function UserGreeting(props){

    const welcomeMessage = <h2 class ="welcome-message">Welcome {props.username}</h2>
    const logInMessage = <h2 class ="logIn-message">Please log in to continue</h2>

    return props.isLoggedIn ? welcomeMessage : logInMessage
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
export default UserGreeting