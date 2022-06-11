import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign In',
    //update
    
    // currentUser: 
    // navLink: <Link to="/signup">Sign Up!</Link>
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user))
        .then(() => dispatch(closeModal())),
    processDemo: (user) => dispatch(login(user))
        .then(() => dispatch(closeModal())),
    otherForm: (
        <button id='modal-other-button' open={preventFocus} onKeyPress={handleKeyPress} onClick={() =>
            dispatch(openModal('Signup'))}>
            Sign Up
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

// const onOpen = (args) => {
//     args.preventFocus = true;
// }
// const handleKeyPress = (e) => {
//     if (e.keyCode === 13) {
//         e.preventDefault();
//         e.target.blur();
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);