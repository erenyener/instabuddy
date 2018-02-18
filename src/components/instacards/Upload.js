import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import ImageUploader from '../ImageUploader/imageuploader';
import MediaGallery from '../mediaGallery/MediaGallery';

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onUpload = this.onUpload.bind(this);
    }

    onUpload(picture){
        console.log(picture);
    }

    render () {
        return (
            <Card fluid>
              <Card.Content>
                <Card.Header>
                   Upload
                   <div style={{display:'inlineBlock', float:'right'}}>
                       <Icon name='computer' />
                       <Icon name='linkify' />
                   </div>
                </Card.Header>
              </Card.Content>
              <Card.Content>
                  {this.props.medias && this.props.medias.length > 0 &&
                      <MediaGallery medias={this.props.medias}></MediaGallery>
                  }
              </Card.Content>
            </Card>
        );
    }
}


export default Upload
