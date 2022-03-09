import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            username: '',
            password: ''
        });
    }

    handleDemo(e) {
        e.preventDefault();
        let user = {
            username: 'Demo User',
            password: '123456'
        }
        this.props.processDemo(user);
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/product-index/app/assets/images/product-hunt-logo-orange-960.png" id="modal-logo" alt="product-hunt-logo" />
                    <h3 id="modal-title">{this.props.formType} on Product Hunt</h3>
                    <br />
                    <p>Join our community of friendly folks discovering and sharing the latest products in tech.</p>
                    <br />
                    Please {this.props.formType} or <span>{this.props.otherForm}</span>
                    <div className='errors'>{this.renderErrors()}</div>
                    <div className='modal-close' onClick={this.props.closeModal}>✕</div>
                    <div>
                        <br />
                        <label htmlFor="username">Username:</label><input type="text" id="username"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        <br />
                        <label htmlFor="password">Password:</label>
                            <input type="password" id="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        <br />
                        <input type="submit" className='submit-modal' value={this.props.formType} />
                        <br />
                        <input type="submit" className='submit-modal' value="Demo User" onClick={this.handleDemo}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;