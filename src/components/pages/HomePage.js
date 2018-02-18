import React from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Post from '../instacards/Post';
import Upload from '../instacards/Upload';
import Preview from '../instacards/Preview';
import { Grid, Segment } from 'semantic-ui-react'
import { fetchMedias } from '../../actions/media';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { media: null };
        this.onMediaSelect = this.onMediaSelect.bind(this);
    }

    componentDidMount() {
        this.props.fetchMedias();
    }

    onMediaSelect(media){
        this.setState({media: media});
    }

    render () {
        return (
            <Grid stackable columns='equal'>
                <Grid.Row>
                      <Grid.Column>
                        <Upload medias={this.props.medias} onMediaSelect={this.onMediaSelect}></Upload>
                      </Grid.Column>
                      <Grid.Column>
                          <Post></Post>
                      </Grid.Column>
                      <Grid.Column>
                          <Preview media={this.state.media}></Preview>
                      </Grid.Column>

                    </Grid.Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        medias: state.medias
    };
}

export default connect(mapStateToProps, { fetchMedias })(HomePage);
