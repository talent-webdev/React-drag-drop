const INITIAL_STATE = {
    sideBarLists: [],
    mainMenus: [],
    selectList: ''
};

const soundReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLAY_LIST':
            return { ...state };
        case 'SET_PLAY_LIST':
            return { ...state, sideBarLists: action.payload };
        default:
            return state;
    }
};

export default soundReducer;
