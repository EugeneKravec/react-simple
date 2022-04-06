const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    profileInfo: { id: 1, alt: "main img", src: "https://as2.ftcdn.net/v2/jpg/01/82/53/33/1000_F_182533318_xGVfH4rnm5TrikGUX9zNptWy1Dlw06Vo.jpg" },

    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 34 },
        { id: 2, message: "It's my first post", likesCount: 23 },
        { id: 3, message: "Blalal", likesCount: 67 },
        { id: 4, message: "Yo=yoyoyoy", likesCount: 1245 },
    ],
    newPostText: "Kamasutra"
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    };
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;