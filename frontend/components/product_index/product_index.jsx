import React from "react";
import ProductIndexItem from "./product_index_item";


class ProductIndex extends React.Component {

    componentDidMount(){
        this.props.fetchProducts();
    }

    render(){
        const { products, deleteProduct } = this.props;
        return (
            <div>
                <h1>Is the next 🐟 here?</h1>
                {/* <h1>Your next favorite thing 👇</h1> */}
                <ul className="product-index">
                    {
                    products.map(product => <ProductIndexItem 
                        product={product} deleteProduct={deleteProduct} key={product.id}/>)
                    }
                </ul>
            </div>
        )
    }
}

export default ProductIndex;