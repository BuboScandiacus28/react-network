import React from 'react';
import Style from './ProfileInfo.module.css';
import userPhoto from './../../../img/cat.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = ({profilePhoto, fullName, status, updateStatusTh, contacts}) => {
    let contactsListElement = (props) => {
        return props != null && props != "" ? <a href={props}>{props}</a> : "Информация отсутствует";
    };
    
    return (
        <div className={Style.root}>
            <div className={Style.information}>
                <div className={Style.photo_container}>
                    <img src={profilePhoto != null ? profilePhoto : userPhoto} alt="Фото профиля" className={Style.photo} />
                </div>
                <div className={Style.description_container}>
                    <h1 className={Style.name}>{fullName}</h1>
                    <ProfileStatus status={status != null ? status : "Изменить статус"} updateStatusTh={updateStatusTh}/>
                    <ul className={Style.contacts_list}>
                        <h2 className={Style.contacts_list_title}>Контакты</h2>
                        <li className={Style.contacts_list_items}><h2>facebook:</h2> {contactsListElement(contacts.facebook)}</li>
                        <li className={Style.contacts_list_items}><h2>website:</h2> {contactsListElement(contacts.website)}</li>
                        <li className={Style.contacts_list_items}><h2>vk:</h2> {contactsListElement(contacts.vk)}</li>
                        <li className={Style.contacts_list_items}><h2>twitter:</h2> {contactsListElement(contacts.twitter)}</li>
                        <li className={Style.contacts_list_items}><h2>instagram:</h2> {contactsListElement(contacts.instagram)}</li>
                        <li className={Style.contacts_list_items}><h2>youtube:</h2> {contactsListElement(contacts.youtube)}</li>
                        <li className={Style.contacts_list_items}><h2>github:</h2> {contactsListElement(contacts.github)}</li>
                        <li className={Style.contacts_list_items}><h2>mainLink:</h2> {contactsListElement(contacts.mainLink)}</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;