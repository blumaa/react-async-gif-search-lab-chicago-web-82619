import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    searchTerm: "",
    images: []
  }

  newSearch = (input = "chickens") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(imageData => {
        this.setState({ images: imageData.data})
      })
  }

  componentDidMount() {
      this.newSearch()
    }


  render() {

    return (
      <div>
        <GifSearch newSearch={this.newSearch}/>
        <GifList images={this.state.images}/>
      </div>
    );
  }
}

export default GifListContainer
