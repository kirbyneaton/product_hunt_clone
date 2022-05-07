import React from "react";
import { Link } from "react-router-dom";


class ProductIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const { product, deleteProduct } = this.props;
        return deleteProduct(product.id)
    }

    // componentDidMount() {
    //     this.props.fetchProductComments(this.props.productId);

    // }

    componentDidUpdate(prevProps,prevState){
        // debugger
        if (prevProps.comments?.length !== this.props.comments?.length) {
            this.props.fetchProductComments(this.productId);
        }
    }


    render() {
        const { product, openModal, comments } = this.props;
        return(
            <div>
                <li className="product-item" onClick={() => openModal(product.id)}>
                    <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/product-index/app/assets/images/fish1.jpeg" alt="product-picture" />
                    <div className="product-text-container">
                        <p className="product-title">{product.title}</p>
                        <p className="product-subtitle">{product.subtitle}</p>
                        <p className="comment-count">🗨️    {comments.length}</p>
                        <p className="comment-count">🗨️    {product.comment_count}</p>
                    </div>
                </li>
            </div>
        )
    }
}

export default ProductIndexItem;