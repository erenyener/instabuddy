import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Upload = () => (
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
        Add
    </Card.Content>
  </Card>
)

export default Upload
