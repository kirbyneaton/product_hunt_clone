import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up',
    // navLink: <Link to="/login">Log In!</Link>
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
        .then(() => dispatch(closeModal())),
    otherForm: (
        <button id='modal-other-button' onClick={() => dispatch(openModal('Login'))}>
            Sign In
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);