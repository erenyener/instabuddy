import React from 'react'

class ImagePreview extends React.Component {
    render() {
        return (
            <img src={this.props.image} />
        );
    }
}

export default ImagePreview;
