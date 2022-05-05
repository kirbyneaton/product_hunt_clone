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


    componentDidUpdate(prevProps,prevState){
        // debugger
        if (prevProps.product.comments?.length !== this.props.product.comments?.length) {
            this.props.fetchProduct(this.props.productId);
        }
    }


    render() {
        const { product, openModal } = this.props;
        return(
            <div>
                <li className="product-item" onClick={() => openModal(product.id)}>
                    <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/product-index/app/assets/images/fish1.jpeg" alt="product-picture" />
                    <div className="product-text-container">
                        <p className="product-title">{product.title}</p>
                        <p className="product-subtitle">{product.subtitle}</p>
                        {/* <p className="comment-count">🗨️    {product.comments.length}</p> */}
                        <p className="comment-count">🗨️    {product.comment_count}</p>
                    </div>
                </li>
            </div>
        )
    }
}

export default ProductIndexItem;