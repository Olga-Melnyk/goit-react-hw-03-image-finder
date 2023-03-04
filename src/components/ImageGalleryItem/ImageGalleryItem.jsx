import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';

import { ImageItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };

  render() {
    return (
      <ImageItem>
        <Image
          onClick={this.onModal}
          src={this.props.item.webformatURL}
          alt="img"
        />
        {this.state.shownModal && (
          <Modal onClose={this.onModal} image={this.props.item} />
        )}
      </ImageItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
  }),
};
