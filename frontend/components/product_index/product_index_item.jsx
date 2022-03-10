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

    render() {
        const { product, openModal } = this.props;
        return(
            <div>
                <li className="product-item" onClick={() => openModal(product.id)}>
                    <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/product-index/app/assets/images/fish1.jpeg" alt="product-picture" />
                    <div className="product-text-container">
                        <p className="product-title">{product.title}</p>
                        <p className="product-subtitle">{product.subtitle}</p>
                        {/* <Link>Edit</Link>
                        <button type="submit" onClick={this.handleSubmit}>Delete</button> */}
                        <p className="comment-count">Comments: {product.comments.length}</p>
                    </div>
                </li>
            </div>
        )
    }
}

export default ProductIndexItem;