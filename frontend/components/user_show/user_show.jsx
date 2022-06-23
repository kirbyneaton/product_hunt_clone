import React from "react";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   comment: ''
    // };

    // this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
    // this.props.fetchProductComments(this.props.productId);
  }

  // componentWillUnmount() {
  //   // debugger
  //   this.props.fetchProductComments(this.props.productId);
  //   // this.props.removeErrors();
  // }

  // componentDidUpdate(prevProps) {
  //   // debugger
  //   if (prevProps.comments?.length !== this.props.comments?.length) {
  //     this.props.fetchProductComments(this.props.productId);
  //   }
  // }

  // renderErrors() {
  //   debugger;
  //   return (
  //     <ul>
  //       {
  //         this.props.errors.map((err, i) => (
  //           <li key={`error-${i}`}>
  //             {err}
  //           </li>
  //         ))
  //       }
  //     </ul>
  //   );
  // }

  render() {
    // let currentUser;
    // for (let user of this.props.users) {
    //   if (this.props.currentUserId === user.id) {
    //     currentUser = user;
    //   }
    // }
    debugger
    return (
      <div>
        <header className="user-header">
          Username: {Object.values(this.props.users)[0].username}
        </header>
        <div>
          My Fish: {Object.values(this.props.products)}
        </div>
        <div>
          My comments: blank
        </div>
      </div>
    );
  }

}

export default UserShow;