import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import ProductForm from "./product_form";
import { fetchProduct, updateProduct } from "../../actions/product_actions";
import { closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/comment_actions';

class EditProductForm extends React.Component {
    render() {
        const { action, formType, product, errors, history, removeErrors} = this.props;

        if (!product) return null;
        return (
            <ProductForm action={action} formType={formType} product={product} errors={errors} history={history} removeErrors={removeErrors}/>
        );
    }

    componentDidMount = () => {
        this.props.fetchProduct(this.props.match.params.productId);
    }
}


const mapStateToProps = (state,ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    errors: state.errors.session,
    formType: 'Update Fish'
});

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (productId) => (dispatch(fetchProduct(productId))),
    action: (product) => dispatch(updateProduct(product)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(EditProductForm);