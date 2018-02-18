import React from 'react'
import { Card, Feed } from 'semantic-ui-react';
import Logo from '../logos/Logo';
import ReactPlaceholder from 'react-placeholder';
import ImagePreview from '../imagePreview/ImagePreview';

import "react-placeholder/lib/reactPlaceholder.css";

class Preview extends React.Component {

    constructor(props) {
        super(props);
        this.state = { mediaSelected:false,  media: null };
    }

    state = { contentExists:false };

    componentWillReceiveProps(props) {
        if(props.media){
            this.setState({media:props.media, mediaSelected: true});
        }
    }

  render(){
    return(
      <Card fluid>
        <Card.Content>
          <Card.Header>
             <Logo style={{'backgroundPosition':'center'}} name="instagram"></Logo>
          </Card.Header>
        </Card.Content>
        <Card.Content>
            <ReactPlaceholder children={false} color='#f5f5f5' type='media' rows={3} ready={false} />
        </Card.Content>

        <ReactPlaceholder children={false} color='#f5f5f5' type='rect' ready={this.state.mediaSelected} style={{ 'width': '%100', 'height': '300px', 'marginRight':'0px' }}>
            <ImagePreview image={this.state.media && this.state.media.url}></ImagePreview>
        </ReactPlaceholder>

        <Card.Content>
            <ReactPlaceholder children={false} color='#f5f5f5' type='textRow' ready={false} />
            <ReactPlaceholder children={false} color='#f5f5f5' type='textRow' ready={false} />
        </Card.Content>



      </Card>
    )

  }
}

export default Preview;
