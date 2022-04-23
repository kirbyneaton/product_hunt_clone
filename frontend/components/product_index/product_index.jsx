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
                    <h1>LATEST PRODUCTS</h1>
                    <ul>
                        <li>
                            My Project 1
                        </li>
                        <li>
                            My Project 1
                        </li>
                        <li>
                            Portfolio Site
                        </li>
                    </ul>
                </aside>
            </div>
        )
    }
}

export default ProductIndex;