import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   users: ''
    // };

    // this.renderErrors = this.renderErrors.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchProducts();
  // }

  render() {
    return(
      <div>
        <input type="text" id='search-input' placeholder="Search Product Fish" />
      </div>
    )
  }
}

export default SearchBar;