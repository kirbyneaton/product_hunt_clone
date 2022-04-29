import { connect } from "react-redux";
import { fetchProduct, deleteProduct } from "../../actions/product_actions";
import ProductShow from './product_show';
import { closeModal } from "../../actions/modal_actions";
import { fetchProductComments, createComment } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps, productId) => {
    
    // const productId = parseInt(match.params.productId);
    // const product = state.entities.products.productId; //edit
    return {
        products: Object.values(state.entities.products),
        productId: ownProps.productId,
        // currentProduct: Object.values(state.entities.products)[productId],
        comments: Object.values(state.entities.comments),
        // navLink: <Link to="/signup">Sign Up!</Link>
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => (dispatch(fetchProduct(id))),
    closeModal: () => dispatch(closeModal()),
    fetchProductComments: (productId) => (dispatch(fetchProductComments(productId))),
    createComment: (comment) => (dispatch(createComment(comment))),
    deleteProduct: (productId) => {
        (dispatch(closeModal()));
        (dispatch(deleteProduct(productId)))}
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductShow);