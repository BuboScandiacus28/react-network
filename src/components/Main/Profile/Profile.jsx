import React from 'react';
import Style from './Profile.module.css';
import profilePhoto from './cat.jpg'

const Profile = () => {
    return (
        <div className={Style.root}>
            <div className={Style.photo_container}>
                <img src={profilePhoto} alt="Фото профиля - кошка" className={Style.photo} />
            </div>
            <div className={Style.information_container}>
                <h1 className={Style.name}>Алексѣй ​Короленко​</h1>
                <h2 className={Style.birthday}>Дата рожденїꙗ: 29 февралѧ 1988 г.</h2>
                <h2 className={Style.city}>Городъ: Кыѥвъ</h2>
                <h2 className={Style.education}>Ѻбразованїѥ: Информацїꙗ ѻтсꙋтствꙋѥтъ</h2>
                <h2 className={Style.web_cite}>​Вебъ​ сайтъ: <a href="https://buboscandiacus28.github.io">https://buboscandiacus28.github.io</a></h2>
            </div>
        </div>
    );
}

export default Profile;