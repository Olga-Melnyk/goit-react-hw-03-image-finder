import { Component } from 'react';
import { Toaster } from 'react-hot-toast';

import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    textSearch: '',
    page: 1,
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch, page: 1 });
  };

  handleClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar onSearch={this.handleSubmit} />
        </div>
        <div>
          <ImageGallery
            value={this.state.textSearch}
            page={this.state.page}
            handleClick={this.handleClick}
          />
        </div>
        <Toaster toastOptions={{ duration: 1500 }} />
      </div>
    );
  }
}
