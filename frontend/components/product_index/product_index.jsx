import React from "react";
import ProductIndexItem from "./product_index_item";


class ProductIndex extends React.Component {

    componentDidMount(){
        this.props.fetchProducts();
    }

    render(){
        const { products, deleteProduct, openModal, productId } = this.props;
        return (
            <div id="homepage">
                <div className="product-index">
                    {/* <h1>Is the next 🐟 here?</h1> */}
                    <h1>Your next favorite thing 👇</h1>
                    <ul>
                        {
                            products.map(product => <ProductIndexItem 
                                openModal={openModal} product={product} deleteProduct={deleteProduct} productId={productId} key={product.id}/>)
                            }
                    </ul>
                </div>
                <aside>
                    <h1 id="latest-projects">LATEST PROJECTS ➔</h1>
                    <ul id="portfolio-projects">
                        <li className="my-projects">
                            <div>
                                <h3>My Project 1</h3>
                                <p>Desription</p>
                            </div>
                            {/* <image /> */}
                        </li>
                        <li className="my-projects">
                            <div id="project-2">
                                <h3>My Project 2</h3>
                                <p>Desription</p>
                            </div>
                            {/* <image /> */}
                        </li>
                        <li className="my-projects">
                            <div>
                                <h3>Portfolio Site</h3>
                                <p>Desription</p>
                            </div>
                            {/* <image /> */}
                        </li>
                    </ul>
                </aside>
            </div>
        )
    }
}

export default ProductIndex;