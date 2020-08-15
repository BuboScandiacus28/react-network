import React from 'react';
import Style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true,
        } )
        
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false,
        } )
    }

    render () {
        return (
            <div className={Style.root}>
                {
                    !this.state.editMode &&
                    <p onClick={this.activateEditMode} className={Style.status}>{this.props.aboutMe}</p>
                }
                {
                    this.state.editMode &&
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.aboutMe} type="text"/> 
                }
                
                
            </div>
        );
    }
    
}

export default ProfileStatus;