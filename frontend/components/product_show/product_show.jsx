import React from "react";

class ProductShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    render () {
        debugger
        return(
            <div>
                <p>Rendering Product Show Page</p>
                {/* <p>{this.props.currentProduct.title}</p> */}

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