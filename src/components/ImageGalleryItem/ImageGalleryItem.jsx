import { Component } from 'react';

import { ImageItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {};

  render() {
    return (
      <ImageItem>
        <Image
          // onClick={this.onModal}
          // className="ImageGalleryItem-image"
          src={this.props.item.webformatURL}
          alt="img"
        />
        {/* {this.state.shownModal && <Modal onClose={this.onModal} image={item} />} */}
      </ImageItem>
    );
  }
}
