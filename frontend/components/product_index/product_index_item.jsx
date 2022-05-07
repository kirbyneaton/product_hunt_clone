import React from "react";
import { Link } from "react-router-dom";


class ProductIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            commentCount: undefined
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const { product, deleteProduct } = this.props;
        return deleteProduct(product.id)
    }

    componentDidMount() {
        // debugger
        this.props.fetchProductComments(this.props.product.id);
        this.setState({ commentCount: this.props.product.comment_count})

    }

    componentDidUpdate(prevProps,prevState){
        // debugger
        if (prevState.comments?.length !== this.state.comments?.length) {
            // this.props.fetchProductComments(this.productId);
            this.render();
            // this.setState({ commentCount: this.props.comments.length })
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
                        {/* <p className="comment-count">🗨️    {comments.length}</p> */}
                        <p className="comment-count">🗨️    {product.comment_count}</p>
                    </div>
                </li>
            </div>
        )
    }
}

export default ProductIndexItem;