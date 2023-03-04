import { Component } from 'react';
import { fetchGalleryImageWithQuer } from '../../services/getGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-hot-toast';

import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    status: 'adle',
    page: 1,
    isLoading: false,
    isMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      try {
        const data = await fetchGalleryImageWithQuer(
          this.props.value.trim(),
          this.state.page
        );

        if (data.hits.length === 0) {
          this.setState({ status: 'idle', isLoading: false, isMore: false });
          toast.error('Sorry, there are no images. Please try again.');
          return;
        }
        if (data.hits.length === 12) {
          this.setState({ isMore: true });
        }
        if (prevProps.value !== this.props.value) {
          this.setState({
            images: [...data.hits],
            status: 'resolved',
            isLoading: false,
          });
        } else {
          this.setState({
            images: [...prevState.images, ...data.hits],
            status: 'resolved',
            isLoading: false,
          });
        }
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}

        {this.state.status === 'resolved' && (
          <Gallery>
            {this.state.images.map(image => {
              return <ImageGalleryItem key={image.id} item={image} />;
            })}
          </Gallery>
        )}
        {this.state.isMore && (
          <Button onSearch={this.handleClick}>Load more</Button>
        )}

        {this.state.status === 'rejected' && <p>Something wrong, try later</p>}
      </>
    );
  }
}
