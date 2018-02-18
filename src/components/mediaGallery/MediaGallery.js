import React from 'react'
import './styles.css'

class MediaGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = { medias: [] };
    }

    render () {
        return (
            <div className={'gallery'}>
                {this.props.medias.map(function(media, index){
                    return <img className={'item'} key={ index } src={media.url} />;
                })}
            </div>
        );
    }
}


export default MediaGallery
