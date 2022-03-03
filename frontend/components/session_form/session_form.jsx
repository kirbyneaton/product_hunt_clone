import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
                    <h3 id="modal-title">{this.props.formType} on Product Hunt</h3>
                    <br />
                    <p>Join our community of friendly folks discovering and sharing the latest products in tech.</p>
                    <br />
                    Please {this.props.formType} or <span>{this.props.otherForm}</span>
                    <div className='errors'>{this.renderErrors()}</div>
                    <div className='modal-close' onClick={this.props.closeModal}>✕</div>
                    <div>
                        <br />
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />
                        <input type="submit" className='submit-modal' value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;