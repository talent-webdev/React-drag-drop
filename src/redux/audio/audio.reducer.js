const INITIAL_STATE = {
    sideBarLists: [],
    playLists: [],
    searchedList: ''
};

const soundReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLAY_LIST':
            return { ...state };
        case 'SET_PLAY_LIST':
            return { ...state, sideBarLists: action.payload };
        case 'ADD_PLAY_LIST':
            var listId = action.payload;
            var index;
            for (index = 0; index < state.sideBarLists.length; index++) {
                if (state.sideBarLists[index]._id === listId) {
                    break
                }
            }
            var sideBarLists = [...state.sideBarLists];
            var removedList = sideBarLists.splice(index, 1);
            var playLists = [...state.playLists, ...removedList]
            return { ...state, playLists, sideBarLists }
        case 'REMOVE_PLAY_LIST':
            listId = action.payload;
            for (index = 0; index < state.playLists.length; index++) {
                if (state.playLists[index]._id === listId)
                    break
            }
            playLists = [...state.playLists];
            removedList = playLists.splice(index, 1);
            sideBarLists = [...state.sideBarLists, ...removedList];
            return { ...state, playLists, sideBarLists }
        default:
            return state;
    }
};

export default soundReducer;
