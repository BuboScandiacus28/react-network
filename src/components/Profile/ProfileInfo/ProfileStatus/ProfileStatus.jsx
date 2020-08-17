import React, {useState, useEffect} from 'react';
import Style from './ProfileStatus.module.css';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true); 
    };

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusTh(status);
    };

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className={Style.root}>
            { 
                !editMode &&
                <p onClick={activateEditMode} className={Style.status}>{props.status}</p>
            }
            {
                editMode &&
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} type="text" />
            }
        </div>
    );

};

export default ProfileStatus;