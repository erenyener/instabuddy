import React from 'react'
import './styles.css'

class PlaceHolder extends React.Component {

    componentDidMount(){
        console.log(this.props.name);
    }

    render () {
        return (
            <div className={'pc'}>
                <div className={'pl-' + this.props.name + ' ' + 'pl'}></div>
            </div>
        );
    }
}
export default PlaceHolder
