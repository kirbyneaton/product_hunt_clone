import React from "react";

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        // The form initializes state to the `product` passed in from props.
        this.state = this.props.product;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors()
    }

    //returning correctly?
    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.action(this.state)
            .then(() => this.goToIndex());
    }


    goToIndex() {
        // debugger
        this.props.history.push('/');
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return(
            <div className="create-edit-form-page">
                <div className="submit-product-background">
                    <img className="submit-product-background" src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/submit-product-background.png" alt="submit-product-background" />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <h1 id="create-product">{this.props.formType}</h1>
                    <br />
                    <div className='errors'>{this.renderErrors()}</div>
                    <div>
                        <label className="new-product-label">Title
                            <input className="input"
                                type="text" 
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </label>
                        <label className="new-product-label">Subtitle
                            <input className="input" 
                                type="text"
                                value={this.state.subtitle}
                                onChange={this.update('subtitle')}
                            />
                        </label>
                        <label className="new-product-label">Description
                            <textarea className="input"
                                value={this.state.description}
                                onChange={this.update('description')}
                            />
                        </label>
                        <label className="new-product-label">Image
                            <input className="input"
                                type="text"
                                value={this.state.img_url}
                                onChange={this.update('img_url')}
                            />
                        </label>
                        <input className="submit-product"
                            type="submit" value={this.props.formType}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }

}

export default ProductForm;