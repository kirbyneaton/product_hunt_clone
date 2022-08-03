import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  //dont need if having search_results component
  // componentDidMount() {
  //   this.props.fetchProducts();
  // }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchProducts();
    this.props.receiveSearch(this.state);
    // this.props.history.push('/search');
    // document.querySelector("#search-field").value = ""
  }

  handleUpdate() {
    return (e) => this.setState({ ["query"]: e.currentTarget.query });
  }

  render() {
    return(
      <div className="search-container">
        <form action="" className="search-form">
          <input onChange={this.handleUpdate()}type="search" results='5' id='search-input' placeholder="Search Product Fish" />

        </form>
      </div>
    )
  }
}

export default SearchBar;