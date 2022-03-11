import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductForm from './product_form';
import { createProduct } from '../../actions/product_actions';

const mapStateToProps = (state) => ({
    product: {
        title: "",
        subtitle: "",
        description: "",
        img_url: "https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/product-index/app/assets/images/fish1.jpeg",
        user_id: state.session.id
    },
    errors: state.errors.session,
    formType: 'Create Fish'
});

const mapDispatchToProps = (dispatch) => ({
    action: (product) => dispatch(createProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);