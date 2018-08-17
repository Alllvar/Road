import React from 'react';

function Item({ webformatURL }) {
    return <div className="image-wrapper">
                <img src={webformatURL} className="image-center" />
                <div className="card-container">{}</div>
            </div>;
}

export default Item;