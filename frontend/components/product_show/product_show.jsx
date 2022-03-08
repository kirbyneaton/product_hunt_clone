import React from "react";

class ProductShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    render () {
        let currentProduct;
        for (let product of this.props.products){
            if (this.props.productId===product.id){
                currentProduct = product
            }
        } 
        debugger
        return(
            <div>
                <p>Rendering Product Show Page</p>
                <p>{currentProduct.title}</p>
                <p>{currentProduct.description}</p>

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