import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal} from "../../actions/modal_actions";
import { fetchProducts, fetchProduct, deleteProduct } from "../../actions/product_actions"
import ProductIndex from "./product_index";
import { fetchProductComments } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
    products: Object.values(state.entities.products),
    comments: Object.values(state.entities.comments)
    // product: products[productId],
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => (dispatch(fetchProducts())),
    fetchProduct: (productId) => (dispatch(fetchProduct(productId))),
    fetchProductComments: (productId) => (dispatch(fetchProductComments(productId))),
    deleteProduct: (productId) => (dispatch(deleteProduct(productId))),
    openModal: (modal) => (dispatch(openModal(modal))),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductIndex);