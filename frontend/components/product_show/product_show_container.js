import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ProductShow from './product_show';

const mapStateToProps = (state, {match }) => {
    const productId = parseInt(match.params.productId);
    const product = state.entities.products.productId; //edit
    return {
        productId,
        product
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => (dispatch(fetchProduct(id)))
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductShow);