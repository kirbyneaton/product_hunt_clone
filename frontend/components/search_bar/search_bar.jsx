import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchProducts();
  // }

  handleUpdate() {
    return (e) => this.setState({ ["value"]: e.currentTarget.value });
  }

  render() {
    return(
      <div>
        <form action="" className="search-form">
          <input onChange={this.handleUpdate()}type="search" results='5' id='search-input' placeholder="Search Product Fish" />

        </form>
      </div>
    )
  }
}

export default SearchBar;