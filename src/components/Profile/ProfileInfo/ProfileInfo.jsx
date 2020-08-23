import React, { useState } from 'react';
import Style from './ProfileInfo.module.css';
import userPhoto from './../../../img/cat.jpg';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataReduxForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = ({profilePhoto, fullName, status, updateStatusTh, contacts, isOwner, savePhotoTh, lookingForAJob, lookingForAJobDescription, saveProfileTh, aboutMe}) => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhotoTh(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfileTh(formData).then(
            () => {
                setEditMode(false);
            }
        );
        //
    };

    return (
        <div className={Style.root}>
            <div className={Style.information}>
                <div className={Style.photo_wrapper}>
                    <div className={Style.photo_container}>
                        <img src={profilePhoto != null ? profilePhoto : userPhoto} alt="Фото профиля" className={Style.photo} />
                    </div>
                    {isOwner &&
                        <>
                            <input type={'file'} id={'profileInfo/insertPhotoId'} className={Style.insert_photo_input} onChange={onMainPhotoSelected} />
                            <label htmlFor={'profileInfo/insertPhotoId'} className={Style.insert_photo_label}>Загрузить новое фото...</label>
                        </>
                    }
                </div>
                {
                    editMode
                        ? <ProfileDataReduxForm initialValues={
                        {
                            aboutMe: status,
                            fullName,
                            lookingForAJob,
                            lookingForAJobDescription,
                            contacts
                        }  
                        } onSubmit={onSubmit} contacts={contacts}/>
                        : <ProfileData fullName={fullName} status={status} updateStatusTh={updateStatusTh}
                            contacts={contacts} isOwner={isOwner} goToEditMode={() => setEditMode(true)}
                            lookingForAJob={lookingForAJob} lookingForAJobDescription={lookingForAJobDescription} aboutMe={aboutMe}/>
                }
                
            </div>
        </div>
    );
};

export default ProfileInfo;