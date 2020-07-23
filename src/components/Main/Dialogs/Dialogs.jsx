import React from 'react';
import Style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
  return (
    <div className={Style.root}>
      <div className={Style.container}>
        <Dialog title="Викторъ" />
        <Dialog title="Павелъ" />
        <Dialog title="Алексѣй" />
        <Dialog title="Матвѣй" />
        <Dialog title="Максимъ" />
        <Dialog title="Владиславъ" />
        <Dialog title="Михаилъ" />
        <Dialog title="Марѳа" />
      </div>

      <div className={Style.line}></div>

      <div className={Style.messages_container}>
        <ul className="messages_list">
          <Message user="Матвѣй" message="Съ праздникомъ весны родичь."/>
          <Message user="Ꙗ" message="И тебѧ тоже, Матвѣй. Какъ тамъ Марѳа?"/>
          <Message user="Матвѣй" message="А ты что не слышалъ? Марѳа съѣла черемши съ чеснокомъ и боли въ сꙋставахъ какъ рꙋкой снѧло!"/>
          <Message user="Ꙗ" message="Во истинꙋ на ​все​ волѧ Дажьбога!"/>
          <Message user="Матвѣй" message="Во истинꙋ!"/>
          <Message user="Матвѣй" message="Съ праздникомъ весны родичь."/>
          <Message user="Ꙗ" message="И тебѧ тоже, Матвѣй. Какъ тамъ Марѳа?"/>
          <Message user="Матвѣй" message="А ты что не слышалъ? Марѳа съѣла черемши съ чеснокомъ и боли въ сꙋставахъ какъ рꙋкой снѧло!"/>
          <Message user="Ꙗ" message="Во истинꙋ на ​все​ волѧ Дажьбога!"/>
          <Message user="Матвѣй" message="Во истинꙋ!"/>
        </ul>
      </div>

    </div>

  );
}

export default Dialogs;
