import React from 'react'
import { Card, Feed } from 'semantic-ui-react';
import PlaceHolder from '../placeholders/PlaceHolder';

class Preview extends React.Component {

  state = { contentExists:false };

  render(){
    return(
      <Card fluid>
        <Card.Content>
          <Card.Header>
             <PlaceHolder name="instagram"></PlaceHolder>
          </Card.Header>
        </Card.Content>
        <Card.Content>

        </Card.Content>
      </Card>
    )

  }
}

export default Preview;
