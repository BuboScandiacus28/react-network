import React from 'react';
import Style from './ProfileData.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileContacts from './ProfileContacts/ProfileContacts';

const ProfileData = ({ fullName, status, updateStatusTh, contacts, isOwner, goToEditMode, lookingForAJob, lookingForAJobDescription, aboutMe }) => {
    return (
        <div className={Style.description_container}>
            <div className={Style.top_col}>
                <h1 className={Style.name}>{fullName}</h1>
                {
                    isOwner &&
                    <svg className={Style.go_to_edit_mode_btn} onClick={goToEditMode}>
                        <use xlinkHref={'#icon-pencil'}></use>
                    </svg>
                }
            </div>
            <ProfileStatus status={status != null ? status : "Изменить статус"} updateStatusTh={updateStatusTh} />
            <ProfileContacts contacts={contacts} />
            <h2 className={Style.job_title}>Looking for a job: {lookingForAJob ? 'Yes' : 'No'}</h2>
            {
                lookingForAJob &&
                <>
                    <h2>My professional skills</h2>
                    <p className={Style.job_description}>{lookingForAJobDescription ? lookingForAJobDescription : "Информация отсутствует"}</p>
                </>
                
            }
            <div className={Style.about_me_container}>
                <h2>About me</h2>
                <p>{aboutMe}</p>
            </div>

        </div>
    );
}

export default ProfileData;