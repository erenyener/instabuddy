import React from 'react'
import './styles.css'

class Logo extends React.Component {

    componentDidMount(){
        console.log(this.props.name);
    }

    render () {
        return (
            <div style={this.props.style} className={'logo-' + this.props.name + ' ' + 'logo'}></div>
        );
    }
}

export default Logo
