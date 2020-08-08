import React from 'react';
import Style from './ProfileInfo.module.css';
import profilePhoto from './../../../img/cat.jpg';

const ProfileInfo = (props) => {
    return (
        <div className={Style.root}>
            <div className={Style.information}>
                <div className={Style.photo_container}>
                    <img src={profilePhoto} alt="Фото профиля - кошка" className={Style.photo} />
                </div>
                <div className={Style.description_container}>
                    <h1 className={Style.name}>{props.name}</h1>
                    <h2 className={Style.birthday}>Дата рожденїꙗ: {props.birthday}</h2>
                    <h2 className={Style.city}>Городъ: {props.city}</h2>
                    <h2 className={Style.education}>Ѻбразованїѥ: {props.education}</h2>
                    <h2 className={Style.web_cite}>​Вебъ​ сайтъ: <a href={props.webCite}>{props.webCite}</a></h2>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;