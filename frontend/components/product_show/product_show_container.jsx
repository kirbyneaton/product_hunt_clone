import { connect } from "react-redux";
import { fetchProduct, fetchProducts, deleteProduct, updateProduct } from "../../actions/product_actions";
import ProductShow from './product_show';
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchProductComments, createComment, deleteComment} from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps, productId) => {
    
    // const productId = parseInt(match.params.productId);
    // const product = state.entities.products.productId; //edit
    return {
        products: Object.values(state.entities.products),
        productId: ownProps.productId,
        // currentProduct: Object.values(state.entities.products)[productId],
        comments: Object.values(state.entities.comments),
        currentUserId: state.session.id,
        errors: state.errors.session,
        // navLink: <Link to="/signup">Sign Up!</Link>
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => (dispatch(fetchProduct(id))),
    closeModal: () => (dispatch(closeModal())),
    openModal: (id) => dispatch(openModal(id)),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProductComments: (productId) => (dispatch(fetchProductComments(productId))),
    createComment: (comment, productId) => (dispatch(createComment(comment, productId))),
    deleteComment: (commentId, productId) => {
        (dispatch(deleteComment(commentId, productId))),
        (dispatch(openModal(productId)));
    },
    updateProduct: (product) => dispatch(updateProduct(product)),
    deleteProduct: (productId) => {
        (dispatch(closeModal()));
        (dispatch(deleteProduct(productId)))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductShow);