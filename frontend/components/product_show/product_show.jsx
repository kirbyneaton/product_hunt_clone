import React from "react";
import { Link } from 'react-router-dom';

const ProductShow = ({product, productId, fetchProduct}) => {
    const products = {
        [productId]: product
    };


    return(
        <div>
            Rendering Product Show Page

        </div>
    )
}

export default ProductShow;