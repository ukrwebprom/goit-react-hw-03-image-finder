import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    request: '',
  }
  searchFormSubmit = (request) => {
    this.setState({request});
  }

  render() {
    const { request } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.searchFormSubmit} />
        <ImageGallery request={request}/>
      </div>
    );
  }

};