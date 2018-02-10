import React from 'react'
import {Link} from 'react-router-dom';
import Post from '../instacards/Post';
import Upload from '../instacards/Upload';
import Preview from '../instacards/Preview';
import { Grid, Segment } from 'semantic-ui-react'

class HomePage extends React.Component {
    render () {
        return (
            <Grid stackable columns='equal'>
                <Grid.Row>
                      <Grid.Column>
                        <Upload></Upload>
                      </Grid.Column>
                      <Grid.Column>
                          <Post></Post>
                      </Grid.Column>
                      <Grid.Column>
                          <Preview></Preview>
                      </Grid.Column>

                    </Grid.Row>
            </Grid>
        );
    }
}

export default HomePage;
