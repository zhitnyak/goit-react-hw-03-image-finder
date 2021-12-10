import { Component } from "react";
import css from "../../App.css";

class Searchbar extends Component {
  state = { searchQuery: "" };

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery.trim());
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
          />
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
export default Searchbar;