import { Component } from 'react';
import { fetchGalleryImageWithQuer } from '../../services/getGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-hot-toast';

import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: null,
    status: 'adle',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      this.setState({ status: 'pending' });
      try {
        const data = await fetchGalleryImageWithQuer(
          this.props.value.trim(),
          1
        );

        if (data.hits.length === 0) {
          this.setState({ status: 'idle' });
          toast.error('Sorry, there are no images. Please try again.');
          return;
        }

        this.setState({ images: data, status: 'resolved' });
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  }

  render() {
    if (this.state.status === 'pending') {
      return <Loader />;
    }
    if (this.state.status === 'resolved') {
      return (
        <Gallery>
          {this.state.images.hits.map(image => {
            return <ImageGalleryItem key={image.id} item={image} />;
          })}
        </Gallery>
      );
    }
    if (this.state.status === 'rejected') {
      return <p>Something wrong, try later</p>;
    }
  }
}
