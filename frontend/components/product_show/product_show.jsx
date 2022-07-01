import React from "react";
import {Link} from "react-router-dom";

class ProductShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            comment: ''
        } 

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderComment = this.renderComment.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchProductComments(this.props.productId);
    }

    componentWillUnmount() {
        // debugger
        this.props.fetchProductComments(this.props.productId);
        // this.props.removeErrors();
    }

    componentDidUpdate(prevProps){
        // debugger
        if (prevProps.comments?.length !== this.props.comments?.length){
            this.props.fetchProductComments(this.props.productId);
        }
    }

    renderComment(comment){
        // debugger
        return(
            <div id="comment-indv" key={comment.id}>
                <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fat_bear.jpeg" alt="default-user-picture" />
                <div className="comment-text">
                    <p id="comment-username">{comment.user.username}</p>
                    <p id="comment-body">{comment.body}</p>
                    {(comment.user_id===this.props.currentUserId) ? 
                        <button id="delete-comment" onClick={() => this.props.deleteComment(comment.id, this.props.productId)}>Delete</button> : ""
                    }
                </div>
            </div>
        )
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = {body: this.state.comment};
        this.props.createComment(comment, this.props.productId);
        this.props.openModal(this.props.productId)
        this.setState({
            comment: ''
        });

        // submitComment()
        //     .then((comment) => {
        //         const updatedProduct = currentProduct;
        //         updatedProduct.comments = currentProduct.comments.concat(comment)
        //         this.props.updateProduct(updatedProduct);
        //     })
      
    }

    renderErrors() {
        debugger
        return (
            <ul>
                {
                    this.props.errors.map((err, i) => (
                        <li key={`error-${i}`}>
                            {err}
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
                        {currentProduct.user_id === this.props.currentUserId ?
                        <div className="edit-delete">
                            <Link to={`/products/${currentProduct.id}/edit`}><button onClick={this.props.closeModal} id="edit-product">Edit Fish</button></Link>
                            <button onClick={() => this.props.deleteProduct(currentProduct.id)} id="delete-product">Delete Fish</button>
                        </div> : 
                        <div> Created by {currentProduct.username}</div>
                        }
                    </div>
                </div>
                
                <div id="product-show-overview">
                    product-show-overview testing
                    <p id="product-show-description">{currentProduct.description}</p>
                </div>

                <h5 id="discussion">DISCUSSION</h5>
                <div>
                    <form className="comment-form" onSubmit={this.handleSubmit}>
                        <div id="comment-box">
                            <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fat_bear.jpeg" alt="current-user-picture" />
                            <input className="input comment-input"
                                type="text"
                                value={this.state.comment}
                                onChange={this.update('comment')}
                                placeholder="What do you think of this fish?"
                            />
                            <button className="submit-product submit-comment">SEND
                            </button>
                        </div>
                        {this.props.errors ?
                        <div className="comment-errors">{this.props.errors}
                        </div> :
                        null
                        }
                    </form>
                
                </div>
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