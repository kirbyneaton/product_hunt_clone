import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };

    
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchProducts();
  // }

  handleSubmit(e){
    e.preventDefault();

  }

  handleUpdate() {
    return (e) => this.setState({ ["keyword"]: e.currentTarget.keyword });
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