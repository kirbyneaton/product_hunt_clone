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
        const { product } = this.props;
        return(
            <div>
                <li className="product-item">
                    <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/product-index/app/assets/images/fish1.jpeg" alt="product-picture" />
                    <div className="product-text-container">
                        <Link className="product-title">{product.title}</Link>
                        <br />
                        <Link className="product-description">{product.description}</Link>
                        {/* <Link>Edit</Link>
                        <button type="submit" onClick={this.handleSubmit}>Delete</button> */}
                        <p className="comment-count"># of comments: 0</p>
                        {/* number of comments? */}
                    </div>
                </li>
            </div>
        )
    }
}

export default ProductIndexItem;