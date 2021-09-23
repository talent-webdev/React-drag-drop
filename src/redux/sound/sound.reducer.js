const INITIAL_STATE = {
    sideBarMenus: [],
    mainMenus: [],
    selectList: ''
};

const soundReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SOUNDLIST':
            return { ...state };
        case 'SETSOUNDDATA':
            return { ...state, sideBarMenus: action.payload };
        default:
            return state;
    }
};

export default soundReducer;
