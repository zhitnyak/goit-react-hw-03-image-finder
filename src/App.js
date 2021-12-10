import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.module.css";

class App extends Component {
  state = {
    searchQuery: "null",
  };

  habdleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.habdleFormSubmit} />
        <ImageGallery searchQuery={searchQuery} />
      </>
    );
  }
}

export default App;
