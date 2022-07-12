import React from "react";
import ProductIndexItem from "./product_index_item";


class ProductIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commentCount: undefined
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchProducts();
        // this.props.fetchProductComments(this.props.poduct.id);
    }


    // componentDidUpdate(prevProps, prevState) {
    //     // debugger
    //     if (prevProps.comments?.length !== this.state.comments?.length) {
    //         // this.props.fetchProductComments(this.productId);
    //         // this.render();
    //         this.setState({ commentCount: this.props.comments.length });
    //     }
    // } 

    render(){
        const { products, deleteProduct, openModal, productId, fetchProduct, comments, fetchProductComments } = this.props;
        return (
            <div id="homepage">
                <div className="product-index">
                    {/* <h1>Is the next 🐟 here?</h1> */}
                    <h1>Your next favorite thing 👇</h1>
                    <ul>
                        {
                            products.map(product => <ProductIndexItem 
                                openModal={openModal} product={product} deleteProduct={deleteProduct} productId={productId} fetchProduct={fetchProduct} comments={product.comments} fetchProductComments={fetchProductComments} key={product.id}/>)
                        }
                    </ul>
                </div>
                <aside>
                    <h1 id="latest-projects">LATEST PROJECTS ➔</h1>
                    <ul id="portfolio-projects">
                        <li className="my-projects">
                            <div>
                                <h3>Mern Stack Proj</h3>
                                <p>Description</p>
                            </div>
                            <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/product-hunt-logo-orange-960.png" alt="project-picture" />
                        </li>
                        <li className="my-projects">
                            <div id="project-2">
                                <h3>JS Proj</h3>
                                <p>Description</p>
                            </div>
                            <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/product-hunt-logo-orange-960.png" alt="project-picture" />
                        </li>
                        <li className="my-projects">
                            <div>
                                <h3>Portfolio Site</h3>
                                <p>Description</p>
                            </div>
                            <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/product-hunt-logo-orange-960.png" alt="project-picture" />
                        </li>
                    </ul>
                    <div id='fishing-soon'>
                        <h2>Fishing soon?</h2>
                        <p>Create your own Fish page and start building an appetite with other bears 🐟</p>
                    </div>
                    <div id='copywrite'>
                        <p>© 2022 PRODUCT FISH</p>
                    </div>
                </aside>
            </div>
        )
    }
}

export default ProductIndex;