import React from 'react';
import Style from './ProfileDataForm.module.css';
import { Input, createField, Textarea } from '../../../common/FormControls/FormControls';
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({handleSubmit, contacts, error}) => {
    
    let contactsInputs = Object.keys(contacts).map(key => {
        return (
            <li key={key}>
                <b>{key}:</b> 
                {createField([], Input, `contacts.${key}`, 'Введите ссылку на ваш профиль...',)}
            </li>
        );
    });
   
    return (
        <form className={Style.edit_profile_form} onSubmit={handleSubmit}>

            <div>
                <b>Full name:</b> {createField([], Input, 'fullName', 'Введите ваше полное имя...', { type: 'text' })}
            </div>

            <div>
                <b>About me:</b> {createField([], Textarea, 'aboutMe', 'Введите информацию о себе...')}
            </div>

            <ul>
                <h1>Contacts</h1>
                {contactsInputs}
            </ul>

            <div className={Style.edit_profile_checkbox}>
                <b>Looking for a job:</b> {createField([], Input, 'lookingForAJob', null, { type: 'checkbox' })}
            </div>

            <div>
                <b>My professional skills:</b> {createField([], Textarea, 'lookingForAJobDescription', 'Введите описание ваших навыков...',)}
            </div>

            {error && <div>{error}</div>}

            <button>Save date</button>

        </form>
    );

}

const ProfileDataReduxForm = reduxForm({
    form: "edit-profile"
})(ProfileDataForm);

export default ProfileDataReduxForm;