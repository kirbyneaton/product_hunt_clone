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
                        <a href="https://unshelvd-1.herokuapp.com/#/" target="_blank"><li className="my-projects">
                            {/* <a href="https://unshelvd-1.herokuapp.com/#/" target="_blank"> */}
                            <div>
                                <h3>Unshelvd</h3>
                                <p>Unshelvd is a social gaming site that does away with uncertainty at your next meetup amongst friends. Just let the site know how many people you have, what your interests include (or exclude), and Unshelvd will give you a list of the games to pull off the (virtual) shelf.</p>
                            </div>
                            <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/product-hunt-logo-orange-960.png" alt="project-picture" />
                            {/* </a> */}
                        </li></a>
                        <a href="https://kirbyneaton.github.io/stock_market_game/" target="_blank"><li className="my-projects">
                            <div id="project-2">
                                <h3>Ride The Bull</h3>
                                <p>Think you can time the market to grow your money faster? This game simulates how a player's money would compare to a market index if they had instead elected to sell and get out of the market at a specified time. The game is meant to illustrate the difficulty of consistently timing the market well, the pitfalls of hindsight bias, and the philosophy pioneered by Vanguard founder, Jack Bogle, which preached investment over speculation.</p>
                            </div>
                            <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/product-hunt-logo-orange-960.png" alt="project-picture" />
                        </li></a>
                        <a href="https://kirbyneaton.github.io" target="_blank"><li className="my-projects">
                            <div>
                                <h3>Portfolio Site</h3>
                                <p>Description</p>
                            </div>
                            <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/product-hunt-logo-orange-960.png" alt="project-picture" />
                        </li></a>
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