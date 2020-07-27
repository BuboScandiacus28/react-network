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

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        //Действие добавления нового поста на стену и в объект _state
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            state.postDate.push(newPost);
            state.newPostText = '';
            return state;
        //Действие посимвольного обновления информации в объекте _state (свойство newPostText) исходя из информации в форме
        case 'UPDATE-NEW-POST-TEXT': 
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }  
};

export default profileReducer;