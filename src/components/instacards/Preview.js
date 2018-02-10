import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

class Preview extends React.Component {

  state = { contentExists:false };

  render(){
    return(
      <Card fluid>
        <Card.Content>
          <Card.Header>
             Preview
          </Card.Header>
        </Card.Content>
        <Card.Content>

        </Card.Content>
      </Card>
    )

  }
}

export default Preview;
