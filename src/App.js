import "./App.css";
import { Component } from "react";
// import Searchbar from "./components/Searchbar/Searchbar";
// import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    searchQuery: "null",
  };

  habdleFormSubmit = (data) => {
    this.setState({ data });
  };

  render() {
    // const { searchQuery } = this.state;

    return (
      <>
        {/* <Searchbar onSubmit={this.habdleFormSubmit} />
        <ImageGallery query={searchQuery} /> */}
      </>
    );
  }
}

export default App;
