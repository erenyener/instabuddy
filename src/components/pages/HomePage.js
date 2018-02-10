import React from 'react'
import {Link} from 'react-router-dom';
import Post from '../instacards/Post';
import Upload from '../instacards/Upload';
import Preview from '../instacards/Preview';
import { Grid, Segment } from 'semantic-ui-react'

class HomePage extends React.Component {
    render () {
        return (
            <Grid columns='equal'>
                <Grid.Row>
                      <Grid.Column>
                          <Post></Post>
                      </Grid.Column>
                      <Grid.Column>
                          <Preview></Preview>
                      </Grid.Column>
                      <Grid.Column>
                          <Upload></Upload>
                      </Grid.Column>
                    </Grid.Row>
            </Grid>
        );
    }
}

export default HomePage;
