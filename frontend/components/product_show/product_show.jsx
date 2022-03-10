import React from "react";

class ProductShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchProductComments(this.props.productId);
    }

    renderComment(comment){
        return(
            <div id="comment-indv" key={comment.id}>
                <p id="comment-username">{comment.user.username }</p>
                <p id="comment-body">{comment.body}</p>
            </div>
            
        )
    }

    render () {
        let currentProduct;
        for (let product of this.props.products){
            if (this.props.productId===product.id){
                currentProduct = product
            }
        } 
        // debugger
        return(
            <div>
                <div className='modal-close' onClick={this.props.closeModal}>✕</div>
                <div className="product-show-item">
                    <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/product-index/app/assets/images/fish1.jpeg" alt="product-picture" id="product-photo"/>
                    <div className="product-show-text-container">
                        <h1 id="product-show-title">{currentProduct.title}</h1>
                        <h2 id="product-show-subtitle">{currentProduct.subtitle}</h2>
                    </div>
                </div>
                <div id="product-show-overview">
                    product-show-overview testing
                    <p id="product-show-description">{currentProduct.description}</p>
                </div>
                <h5 id="discussion">DISCUSSION</h5>
                <div id="product-show-comments">
                    {this.props.comments.map(this.renderComment)}

                    {/* <p>{!(this.props.comments) ? "loading" : this.props.comments.toString()}</p>  */}
                </div>
            </div>
        );
    }
    
} 
// const ProductShow = ({product, productId }) => {
//     // const products = {
//     //     [productId]: product
//     // };

    
//         return (
//             <div>
//                 Rendering Product Show Page
//                 {ui.modal}
//                 {productId}


//             </div>
//         );

    
// }

export default ProductShow;