import React from "react";
import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchProducts, fetchProduct, deleteProduct } from "../../actions/product_actions";
import { openModal, closeModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps, productId) => {
  // debugger
  return {
    products: Object.values(state.entities.products),
    productId: ownProps.productId,
    // currentProduct: Object.values(state.entities.products)[productId],
    comments: Object.values(state.entities.comments),
    currentUserId: state.session.id,
    users: Object.values(state.entities.users),
    // errors: state.errors.session,
    errors: state.errors.comment
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => (dispatch(fetchProduct(id))),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchProductComments: (productId) => (dispatch(fetchProductComments(productId))),
  openModal: (modal) => (dispatch(openModal(modal))),
  closeModal: () => dispatch(closeModal())
  // updateProduct: (product) => dispatch(updateProduct(product)),
  // deleteProduct: (productId) => {
  //   (dispatch(closeModal()));
  //   (dispatch(deleteProduct(productId)));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);