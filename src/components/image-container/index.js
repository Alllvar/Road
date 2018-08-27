import React, { Component } from 'react';
import Loader from '../library/loader';
import Item from './item';

class ImageContainer extends Component {
    componentDidMount() {
        this.props.fetch();
    }

    renderItems() {
        return this.props.entities.map(image => {
            return <Item {...image} key={image.id} />;
        })
    }

    render() {
        const { isFetching } = this.props;

        return (
            <div>
            	<h1 className="heading">Image Gallery</h1>
                <div className="gallery">
                    {isFetching ? <Loader /> : this.renderItems()}
                </div>
            </div>

            
        );
    }
}

export default ImageContainer;
