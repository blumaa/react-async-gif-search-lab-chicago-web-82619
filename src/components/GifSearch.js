import React, {Component} from 'react';

class GifSearch extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      searchTerm: ""
    }

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.newSearch(this.state.searchTerm)
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <input type="text" onChange={(event) => {
          this.setState({searchTerm: event.target.value})
        }} value={this.state.searchTerm}></input>
    </form>)

  }
}

export default GifSearch
