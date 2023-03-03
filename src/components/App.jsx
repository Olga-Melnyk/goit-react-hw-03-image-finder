import { Component } from 'react';
import { Toaster } from 'react-hot-toast';

import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar onSearch={this.handleSubmit} />
        </div>
        <div>
          <ImageGallery value={this.state.textSearch} />
        </div>
        <Toaster toastOptions={{ duration: 1500 }} />
      </div>
    );
  }
}
