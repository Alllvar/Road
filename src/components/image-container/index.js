import React, { Component } from 'react';
import Item from './item';
import { IMAGES } from '../../fixtures';

class ImageContainer extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        window.fetch('https://pixabay.com/api/?key=9797284-4a52a8537958550b9ce0d956f')
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(data => {
                this.setState({
                    images: data.hits
                })
            })
    }

    renderItems() {
        return this.state.images.map(image => {
            return <Item {...image} key={image.id} />;
        })
    }

    render() {
        return (
            <div className="container">
            	<h1 className="heading">Image Gallery</h1>
                <div className="gallery">
                    {this.renderItems()}
                </div>
            </div>

            
        );
    }
}

export default ImageContainer;
