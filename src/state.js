let store = {
    _state: {
        profilePage: {
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
        },
        navMenuItemDate: [
            {
              href: "/profile",
              iconId: "algiz",
              title: "Моꙗ страница"
            }, {
              href: "/news",
              iconId: "eihwaz",
              title: "Новости"
            }, {
              href: "/dialogs",
              iconId: "laguz",
              title: "Соѻбщенїꙗ"
            }, {
              href: "/friends",
              iconId: "mannaz",
              title: "Дрꙋзьꙗ"
            }, {
              href: "/groups",
              iconId: "nauthiz",
              title: "Соѻбщества"
            }, {
              href: "/photos",
              iconId: "raido",
              title: "Фотографїи"
            }, {
              href: "/musics",
              iconId: "thurisaz",
              title: "Мꙋзыка"
            }, {
              href: "/setings",
              iconId: "fehu",
              title: "Настройкы"
            },
        ],
        dialogsPage: {
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
                }, {
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
        },   
    },
    getState() {
        return this._state;
    },
    _updatePage() {

    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText
        };
        this._state.profilePage.postDate.push(newPost);
        this._state.profilePage.newPostText = '';
        this._updatePage();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._updatePage();
    },
    subscribe(observer) {
        this._updatePage = observer;
    },
}

export default store;

window.store = store;