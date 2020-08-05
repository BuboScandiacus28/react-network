let initialState = {
    profileInfoDate: [
        {
            name:"Алексѣй ​Короленко​",
            birthday:"29 февралѧ 1988 г.",
            city:"Кыѥвъ",
            education:"Информацїꙗ ѻтсꙋтствꙋѥтъ",
            webCite:"https://buboscandiacus28.github.io"
        },
    ], 
    postDate: [
        {
            message: "Нꙋ гдѣ же ​всѣ​ славѧне?"
        }, {
            message: "Сварогъ​ - истинный богъ!"
        }, {
            message: "Кто на Ивана Кꙋпала?"
        },
    ],
    newPostText: ''
};

const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreater = () => ({type: ADD_POST});

export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type) {
        //Действие добавления нового поста на стену и в объект _state
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            stateCopy = {
                ...state,
                postDate: [...state.postDate, newPost],
                newPostText: ''
            };
            return stateCopy;
        }
        //Действие посимвольного обновления информации в объекте _state (свойство newPostText) исходя из информации в форме
        case UPDATE_NEW_POST_TEXT:
            stateCopy = {
                ...state,
                newPostText: action.newText
            };
            return stateCopy;
        default: 
            return state;
    }  
};

export default profileReducer;