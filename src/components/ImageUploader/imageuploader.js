import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [], lastPicture:'eren' };
        this.changeHandler=this.changeHandler.bind(this);
    }

    changeHandler(e) {
        console.log(e.target.value)
        this.state.lastPicture=e.target.value;
        this.state.pictures = this.state.pictures.concat(e.target.value);
        this.forceUpdate();
        console.log(this.state.pictures);
        // if (typeof this.props.onUpload === 'function') {
        //     this.props.onUpload(e.target.value);
        // }
    }

    render () {
        const state = this.state;
        return (
            <div>
                <input type="file" value={this.props.value} onChange={this.changeHandler} />
                <img src={state.lastPicture} />
            </div>

        );
    }
}


export default Upload
