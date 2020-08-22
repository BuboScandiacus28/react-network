import React from 'react';
import Style from './Preloader.module.css';
import preloader from './../../../img/loader.gif';

let Preloader = () => {

  return (
    <div className={Style.loader}>
      <img className={Style.loaderInner} src={preloader} alt='Прелоадер'/>
    </div>
  );

};

export default Preloader;
