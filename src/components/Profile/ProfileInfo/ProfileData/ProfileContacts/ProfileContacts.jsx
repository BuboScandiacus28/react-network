import React from 'react';
import Style from './ProfileContacts.module.css';

const ProfileContacts = ({contacts}) => {
    
    let contactsHref = (props) => {
        return props != null && props !== "" ? <a href={props}>{props}</a> : "Информация отсутствует";
    };

    let contactsElements = Object.keys(contacts).map(key => {
        return <li key={key} className={Style.contacts_list_item}><b>{key}:</b> {contactsHref(contacts[key])}</li>
    })

    return (
        <ul className={Style.contacts_list}>
            <h2 className={Style.contacts_list_title}>Контакты</h2>
            {contactsElements}
        </ul>
    );
};

export default ProfileContacts;