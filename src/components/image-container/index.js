import React, { Component } from 'react';
import Item from './item';
import { IMAGES } from '../../fixtures';

class ImageContainer extends Component {
    renderItems() {
        return IMAGES.map(image => {
            return <Item {...image} key={image.id} />;
        })
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default ImageContainer;
