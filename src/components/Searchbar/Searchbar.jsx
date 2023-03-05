import { Component } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

import { BsSearch } from 'react-icons/bs';

import {
  Searchbar,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) {
      return toast.error('Please write a word to search for');
    }
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BsSearch />
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
