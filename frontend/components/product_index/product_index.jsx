import React from "react";


class ProductIndex extends React.Component {

    componentDidMount(){
        this.props.fetchProducts();
    }

    render(){
        const { posts, deletePost } = this.props;
        return (
            <div>
                Product Index 
            </div>
        )
    }
}

export default ProductIndex;