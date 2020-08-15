import React from 'react';
import Style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    statusInputRef = React.createRef();

    activateEditMode = () => {
        this.setState( {
            editMode: true,
        } )
        
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false,
        } );
        this.props.updateStatusTh(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState( {
            status: e.currentTarget.value,
        } );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        
    }

    render () {
        return (
            <div className={Style.root}>
                {
                    !this.state.editMode &&
                    <p onClick={this.activateEditMode} className={Style.status}>{this.props.status}</p>
                }
                {
                    this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text"/> 
                }
                
                
            </div>
        );
    }
    
}

export default ProfileStatus;