import React from 'react'
import './styles.css'

class MediaGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = { medias: [] };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(media){
        console.log("setMedia");
        this.props.handleClick(media);
    }

    render () {
        var self = this;
        return (
            <div className={'gallery'}>
                {this.props.medias.map(function(media, index){
                    return <img onClick={()=>self.handleClick(media)} className={'item'} key={ index } src={media.url} />;
                })}
            </div>
        );
    }
}


export default MediaGallery
