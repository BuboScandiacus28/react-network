import React from 'react';
import './Profile.css';
import profilePhoto from './cat.jpg'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-photo-container">
                <img src={profilePhoto} alt="Фото профиля - кошка" className="profile-photo" />
            </div>
            <div className="profile-information-container">
                <h1 className="name">Алексѣй ​Короленко​</h1>
                <h2 className="day-of-birth">Дата рожденїꙗ: 29 февралѧ 1988 г.</h2>
                <h2 className="city">Городъ: Кыѥвъ</h2>
                <h2 className="education">Ѻбразованїѥ: Информацїꙗ ѻтсꙋтствꙋѥтъ</h2>
                <h2 className="web-cite">​Вебъ​ сайтъ: <a href="https://buboscandiacus28.github.io">https://buboscandiacus28.github.io</a></h2>
            </div>
        </div>
    );
}

export default Profile;