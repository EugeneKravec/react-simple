const initialState = {
    sidebar: [
        { id: 1, name: "Dimych", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUet2Ttx4wmVw_vUFu4VTWUG_gQa7ButRoGw&usqp=CAU" },
        { id: 2, name: "Sveta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPzAXu5_V7DvsIguzD8s510hNkWbYL1E_Lv-g61IjWZ5niFHgkUf-VrtHlMLwlTnYdyQ&usqp=CAU" },
        { id: 3, name: "Andrey", img: "https://ae01.alicdn.com/kf/HTB1Yf0eXynrK1RjSsziq6xptpXaV/100-OEM.jpg" },
        { id: 4, name: "Viktor", img: "https://static.tildacdn.com/tild3961-3733-4833-a265-346339613533/lamborghini-logo-192.png" },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;