import React from 'react'
import { Card, Feed } from 'semantic-ui-react';
import Logo from '../logos/Logo';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

class Preview extends React.Component {

  state = { contentExists:false };

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

        <ReactPlaceholder children={false} color='#f5f5f5' type='rect' ready={false} style={{ 'width': '%100', 'height': '300px', 'marginRight':'0px' }} />

        <Card.Content>
            <ReactPlaceholder children={false} color='#f5f5f5' type='textRow' ready={false} />
            <ReactPlaceholder children={false} color='#f5f5f5' type='textRow' ready={false} />
        </Card.Content>



      </Card>
    )

  }
}

export default Preview;
