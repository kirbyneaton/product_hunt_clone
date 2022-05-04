import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal} from "../../actions/modal_actions";
import { fetchProducts, fetchProduct, deleteProduct } from "../../actions/product_actions"
import ProductIndex from "./product_index";

const mapStateToProps = (state ) => ({
    products: Object.values(state.entities.products),
    // product: products[productId],
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => (dispatch(fetchProducts())),
    fetchProduct: (productId) => (dispatch(fetchProduct(productId))),
    deleteProduct: (productId) => (dispatch(deleteProduct(productId))),
    openModal: (modal) => (dispatch(openModal(modal))),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductIndex);