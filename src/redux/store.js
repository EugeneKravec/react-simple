import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        // profilePage: {
        //     profileInfo: { id: 1, alt: "main img", src: "https://as2.ftcdn.net/v2/jpg/01/82/53/33/1000_F_182533318_xGVfH4rnm5TrikGUX9zNptWy1Dlw06Vo.jpg" },

        //     posts: [
        //         { id: 1, message: "Hi, how are you?", likesCount: 34 },
        //         { id: 2, message: "It's my first post", likesCount: 23 },
        //         { id: 3, message: "Blalal", likesCount: 67 },
        //         { id: 4, message: "Yo=yoyoyoy", likesCount: 1245 },
        //     ],
        //     newPostText: "Kamasutra"
        // },
        // messagesPage: {
        //     dialogs: [
        //         { id: 1, name: "Dimych", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUet2Ttx4wmVw_vUFu4VTWUG_gQa7ButRoGw&usqp=CAU" },
        //         { id: 2, name: "Andrey", img: "https://a.allegroimg.com/original/032fe7/dfc428624467b53cba9647d18a31/EMBLEMAT-ZNACZEK-LOGO-3D-CADILLAC-110-mm-x-100-mm" },
        //         { id: 3, name: "Sveta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQevS3u2I_WyApcFVrdQnxRvJlF2sXazRksg&usqp=CAU" },
        //         { id: 4, name: "Sasha", img: "https://files.grizly.com/storage/Question/27143/conversions/media-primary.jpg" },
        //         { id: 5, name: "Viktor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJ83Q9t-hL45BV3qqppU9p_H_nD1TkkrdPA&usqp=CAU" },
        //         { id: 6, name: "Dimych", img: "https://cdn2.riastatic.com/photosnew/general/adv_photos/fiat-idea-2003-znachok-abarth-samokleyka-120-mm-tsr-znachok-fyat-ydeya__260575457m.jpg" },
        //         { id: 7, name: "Andrey", img: "https://ae01.alicdn.com/kf/HTB1Yf0eXynrK1RjSsziq6xptpXaV/100-OEM.jpg" },
        //         { id: 8, name: "Sveta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPzAXu5_V7DvsIguzD8s510hNkWbYL1E_Lv-g61IjWZ5niFHgkUf-VrtHlMLwlTnYdyQ&usqp=CAU" },
        //         { id: 9, name: "Sasha", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREX63FzZ15rvwvJbWsNhayWOVfPhTdjWKXlA&usqp=CAU" },
        //         { id: 10, name: "Viktor", img: "https://static.tildacdn.com/tild3961-3733-4833-a265-346339613533/lamborghini-logo-192.png" },
        //     ],
        //     messages: [
        //         { id: 1, message: "Hi" },
        //         { id: 2, message: "How are your education?" },
        //         { id: 3, message: "My education is awesome" },
        //         { id: 4, message: "Very good. Hope you find you first job soon" },
        //         { id: 5, message: "Yep. It will be my new step in my life" },
        //     ],
        //     newMessageBody: ''
        // },
        // sidebar: [
        //     { id: 1, name: "Dimych", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUet2Ttx4wmVw_vUFu4VTWUG_gQa7ButRoGw&usqp=CAU" },
        //     { id: 2, name: "Sveta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPzAXu5_V7DvsIguzD8s510hNkWbYL1E_Lv-g61IjWZ5niFHgkUf-VrtHlMLwlTnYdyQ&usqp=CAU" },
        //     { id: 3, name: "Andrey", img: "https://ae01.alicdn.com/kf/HTB1Yf0eXynrK1RjSsziq6xptpXaV/100-OEM.jpg" },
        //     { id: 4, name: "Viktor", img: "https://static.tildacdn.com/tild3961-3733-4833-a265-346339613533/lamborghini-logo-192.png" },
        // ]

    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    },
}

window.store = store;

export default store;