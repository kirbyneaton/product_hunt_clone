import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductForm from './product_form';
import { createProduct } from '../../actions/product_actions';
import { removeErrors } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
    product: {
        title: "",
        subtitle: "",
        description: "",
        img_url: "https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Default.png",
        user_id: state.session.id
    },
    errors: state.errors.session,
    formType: 'Create Fish'
});

const mapDispatchToProps = (dispatch) => ({
    action: (product) => dispatch(createProduct(product)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);