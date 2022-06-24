import { connect } from "react-redux";
import React from "react";
import UserShow from "./user_show";
import { fetchProducts, fetchProduct, deleteProduct } from "../../actions/product_actions"

const mapStateToProps = (state, ownProps, productId) => {
  // debugger
  return {
    products: Object.values(state.entities.products),
    productId: ownProps.productId,
    // currentProduct: Object.values(state.entities.products)[productId],
    comments: Object.values(state.entities.comments),
    currentUserId: state.session.id,
    users: state.entities.users,
    // errors: state.errors.session,
    errors: state.errors.comment
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => (dispatch(fetchProduct(id))),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchProductComments: (productId) => (dispatch(fetchProductComments(productId))),
  // updateProduct: (product) => dispatch(updateProduct(product)),
  // deleteProduct: (productId) => {
  //   (dispatch(closeModal()));
  //   (dispatch(deleteProduct(productId)));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);