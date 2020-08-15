import React from 'react';
import Style from './ProfileInfo.module.css';
import userPhoto from './../../../img/cat.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    let contactsListElement = (props) => {
        return props != null && props != "" ? <a href={props}>{props}</a> : "Информация отсутствует";
    };
    
    return (
        <div className={Style.root}>
            <div className={Style.information}>
                <div className={Style.photo_container}>
                    <img src={props.profilePhoto != null ? props.profilePhoto : userPhoto} alt="Фото профиля" className={Style.photo} />
                </div>
                <div className={Style.description_container}>
                    <h1 className={Style.name}>{props.fullName}</h1>
                    <ProfileStatus status={props.status != null ? props.status : "Изменить статус"} updateStatusTh={props.updateStatusTh}/>
                    <ul className={Style.contacts_list}>
                        <h2 className={Style.contacts_list_title}>Контакты</h2>
                        <li className={Style.contacts_list_items}><h2>facebook:</h2> {contactsListElement(props.contacts.facebook)}</li>
                        <li className={Style.contacts_list_items}><h2>website:</h2> {contactsListElement(props.contacts.website)}</li>
                        <li className={Style.contacts_list_items}><h2>vk:</h2> {contactsListElement(props.contacts.vk)}</li>
                        <li className={Style.contacts_list_items}><h2>twitter:</h2> {contactsListElement(props.contacts.twitter)}</li>
                        <li className={Style.contacts_list_items}><h2>instagram:</h2> {contactsListElement(props.contacts.instagram)}</li>
                        <li className={Style.contacts_list_items}><h2>youtube:</h2> {contactsListElement(props.contacts.youtube)}</li>
                        <li className={Style.contacts_list_items}><h2>github:</h2> {contactsListElement(props.contacts.github)}</li>
                        <li className={Style.contacts_list_items}><h2>mainLink:</h2> {contactsListElement(props.contacts.mainLink)}</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;