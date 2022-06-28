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
    // this.props.fetchProductComments(this.props.products.id);
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
    let myFish = [];
    for (let product of this.props.products) {
      product.user_id === this.props.currentUserId ? myFish[product.id] = product : ""}

    let currentUser;
    for (let user of this.props.users) {
      if (this.props.currentUserId === user.id) {
        currentUser = user;
      }
    }
    // debugger
    return (
      <div>
        <header className="user-header">
          <div className="user-header">
            <img id="user-show-profile-img" src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fat_bear.jpeg" alt="default-user-picture" />
            <div className="user-header-content">
              <p>{currentUser.username}</p>
              {/* <button id="user-edit">edit button?</button> */}
            </div>
          </div>
        </header>
        <div id='user-category-nav'>
          <h4>My Fish</h4>
          {/* <h4>My Comments</h4> */}
        </div>
        {myFish.length === 0 ?
        <p id='no-fish-yet'>😿<br></br>No fish yet</p> :
        <ul id='my-fish'>
          {myFish.map(product => {
            return(product.user_id===this.props.currentUserId ? 
            <li className="product-item" key={product.id} onClick={() => this.props.openModal(product.id)}>
              <img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/product-index/app/assets/images/fish1.jpeg" alt="product-picture" />
                <div className="product-text-container">
                  <p className="product-title">{product.title}</p>
                  <p className="product-subtitle">{product.subtitle}</p>
                  {/* <p className="comment-count">🗨️    {comments.length}</p> */}
                </div>
            </li> : "")
          })}
          {}
        </ul>}
      </div>
    );
  }

}

export default UserShow;