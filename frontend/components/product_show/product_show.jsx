import React from "react";
import {Link} from "react-router-dom";

class ProductShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            comment: []
        } 

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchProductComments(this.props.productId);
    }

    renderComment(comment){
        return(
            <div id="comment-indv" key={comment.id}>
                <p id="comment-username">🐻 {comment.user.username}</p>
                <p id="comment-body">{comment.body}</p>
                {/* {(comment.user_id===this.props.currentUserId) ? 
                    <button onClick={() => this.props.deleteComment(currentComment.id)}>Delete Comment</button> : <p>none</p>
                } */}
            </div>
        )
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        // debugger

        let comment = {body: this.state.comment};
        e.preventDefault();
        this.props.createComment(comment, this.props.productId);

        // submitComment()
        //     .then((comment) => {
        //         const updatedProduct = currentProduct;
        //         updatedProduct.comments = currentProduct.comments.concat(comment)
        //         this.props.updateProduct(updatedProduct);
        //     })
      
    }

    renderErrors() {
        return (
            <ul>
                {
                    this.props.errors.map((err, i) => (
                        <li key={`error-${i}`}>
                            {err.message}
                        </li>
                    ))
                }
            </ul>
        );
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
                        <div className="edit-delete">
                            <Link to={`/products/${currentProduct.id}/edit`}><button onClick={this.props.closeModal} id="edit-product">Edit Fish</button></Link>
                            <button onClick={() => this.props.deleteProduct(currentProduct.id)} id="delete-product">Delete Fish</button>
                        </div>
                    </div>
                </div>
                
                <div id="product-show-overview">
                    product-show-overview testing
                    <p id="product-show-description">{currentProduct.description}</p>
                </div>

                <h5 id="discussion">DISCUSSION</h5>
                <form onSubmit={this.handleSubmit}>
                    <input className="input"
                        type="text"
                        value={this.state.comment}
                        onChange={this.update('comment')}
                    />
                    <button className="submit-product">SEND
                    </button>
                    {/* <div className='comment-errors'>
                        {
                            this.props.errors?.map((err, i) => (
                                <li key={`error-${i}`}>
                                    {err.message}
                                </li>
                            ))
                        }
                    </div> */}
                </form>
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