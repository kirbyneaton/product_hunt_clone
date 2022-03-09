import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import ProductShowContainer from "../product_show/product_show_container";


const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return (null);
    };
    let component;
    // if (Number.isInteger(modal)){
    //     component = <ProductShowContainer productId={modal}/>
    // };
    switch (modal) {
        case 'Login':
            component = <LoginFormContainer />
            break;
        case 'Signup':
            component = <SignupFormContainer />
            break;
        case modal:
            component = <ProductShowContainer  productId={modal} /> //e.g. modal==1
            return (
                <div className="modal-background" onClick={closeModal}>
                    <div className="modal-content-product" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            );
        default:
            return null;
    };
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-content-signin" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return ({
    modal: state.ui.modal,
    // products: state.entities.products
    })

}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);