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
};

const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
  
    switch(action.type) {
        //Действие добавления нового сообщения на форму диалога и в объект _state
        case ADD_MESSAGE: {
          stateCopy = {
            ...state,
            messageDate: [...state.messageDate, {user: "Ꙗ", message: action.newMessageText}],
            newMessageText: ''
          };
          return stateCopy;
        }
        default: 
            return state;
    }
};

export default dialogsReducer;