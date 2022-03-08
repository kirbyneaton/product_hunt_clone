import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ProductShow from './product_show';
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, productId) => {
    debugger
    // const productId = parseInt(match.params.productId);
    // const product = state.entities.products.productId; //edit
    return {
        products: Object.values(state.entities.products),
        currentProduct: state.entities.products.productId,
        productId,
        // navLink: <Link to="/signup">Sign Up!</Link>
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => (dispatch(fetchProduct(id))),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductShow);