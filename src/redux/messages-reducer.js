const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: "Dimych", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUet2Ttx4wmVw_vUFu4VTWUG_gQa7ButRoGw&usqp=CAU" },
        { id: 2, name: "Andrey", img: "https://a.allegroimg.com/original/032fe7/dfc428624467b53cba9647d18a31/EMBLEMAT-ZNACZEK-LOGO-3D-CADILLAC-110-mm-x-100-mm" },
        { id: 3, name: "Sveta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQevS3u2I_WyApcFVrdQnxRvJlF2sXazRksg&usqp=CAU" },
        { id: 4, name: "Sasha", img: "https://files.grizly.com/storage/Question/27143/conversions/media-primary.jpg" },
        { id: 5, name: "Viktor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJ83Q9t-hL45BV3qqppU9p_H_nD1TkkrdPA&usqp=CAU" },
        { id: 6, name: "Dimych", img: "https://cdn2.riastatic.com/photosnew/general/adv_photos/fiat-idea-2003-znachok-abarth-samokleyka-120-mm-tsr-znachok-fyat-ydeya__260575457m.jpg" },
        { id: 7, name: "Andrey", img: "https://ae01.alicdn.com/kf/HTB1Yf0eXynrK1RjSsziq6xptpXaV/100-OEM.jpg" },
        { id: 8, name: "Sveta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPzAXu5_V7DvsIguzD8s510hNkWbYL1E_Lv-g61IjWZ5niFHgkUf-VrtHlMLwlTnYdyQ&usqp=CAU" },
        { id: 9, name: "Sasha", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREX63FzZ15rvwvJbWsNhayWOVfPhTdjWKXlA&usqp=CAU" },
        { id: 10, name: "Viktor", img: "https://static.tildacdn.com/tild3961-3733-4833-a265-346339613533/lamborghini-logo-192.png" },
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are your education?" },
        { id: 3, message: "My education is awesome" },
        { id: 4, message: "Very good. Hope you find you first job soon" },
        { id: 5, message: "Yep. It will be my new step in my life" },
    ],
    newMessageBody: ''
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body })
            return state;

        default:
            return state;
    };

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default messagesReducer;