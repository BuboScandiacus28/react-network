import React, {useState, useEffect} from 'react';
import Style from './ProfileStatus.module.css';

const ProfileStatus = ({status, updateStatusTh}) => {

    let [editMode, setEditMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(status);

    useEffect( () => {
        setLocalStatus(status);
    }, [status]);

    let activateEditMode = () => {
        setEditMode(true); 
    };

    let deactivateEditMode = () => {
        setEditMode(false);
        updateStatusTh(status);
    };

    let onStatusChange = (e) => {
        setLocalStatus(e.currentTarget.value);
    };

    return (
        <div className={Style.root}>
            { 
                !editMode &&
                <p onClick={activateEditMode} className={Style.status}>{localStatus}</p>
            }
            {
                editMode &&
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={localStatus} type="text" />
            }
        </div>
    );

};

export default ProfileStatus;