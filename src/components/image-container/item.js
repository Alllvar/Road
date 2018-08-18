import React from 'react';
import { FaHeart, FaEye, FaTags } from 'react-icons/fa';

function Item({ webformatURL, likes, tags, views}) {
    return (
        <div className="image-wrapper">
            <img src={webformatURL} className="example" alt="img" />
            <div className="overlay">
                <div className="text">
                    <div className="photo-props-container">
                        <span className="photo-props">
                            <span className="icon"><FaHeart /></span>{likes}
                        </span>
                        <span className="photo-props">
                            <span className="icon"><FaEye /></span>{views}
                        </span>
                    </div>
                    <div className="photo-props-container">
                        <span className="photo-props">
                            <span className="icon"><FaTags /></span>{tags}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;