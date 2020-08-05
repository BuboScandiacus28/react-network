let initialState = {
    dialogDate: [
        {
          userId: "1",
          title: "Викторъ"
        }, {
          userId: "2",
          title: "Павелъ"
        }, {
          userId: "3",
          title: "Алексѣй"
        }, {
          userId: "4",
          title: "Матвѣй"
        }, {
          userId: "5",
          title: "Максимъ"
        }, {
          userId: "6",
          title: "Владиславъ"
        }, {
          userId: "7",
          title: "Михаилъ"
        }, {
          userId: "8",
          title: "Марѳа"
        },
    ],
    messageDate: [
        {
          user: "Ꙗ",
          message: "Съ праздникомъ весны родичь."
        }, {
          user: "Матвѣй",
          message: "И тебѧ тоже, Матвѣй. Какъ тамъ Марѳа?"
        }, {
          user: "Ꙗ",
          message: "А ты что не слышалъ? Марѳа съѣла черемши съ чеснокомъ и боли въ сꙋставахъ какъ рꙋкой снѧло!"
        }, {
          user: "Матвѣй",
          message: "Во истинꙋ на ​все​ волѧ Дажьбога!"
        }, {
          user: "Матвѣй",
          message: "Во истинꙋ!"
        },
    ], 
    newMessageText: ''
};

const ADD_MESSAGE = 'ADD-MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreater = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
  
    switch(action.type) {
        //Действие добавления нового сообщения на форму диалога и в объект _state
        case ADD_MESSAGE: {
          if (state.newMessageText === '') return state; 
          let newMessage = {
              user: "Ꙗ",
              message: state.newMessageText
          };
          stateCopy = {
            ...state,
            messageDate: [...state.messageDate, newMessage],
            newMessageText: ''
          };
          return stateCopy;
        }
        //Действие посимвольного обновления информации в объекте _state (свойство newMessageText) исходя из информации в форме
        case UPDATE_NEW_MESSAGE_TEXT: 
          stateCopy = {
            ...state,
            newMessageText: action.newText
          };
          return stateCopy;
        default: 
            return state;
    }
};

export default dialogsReducer;