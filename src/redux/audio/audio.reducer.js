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
            var isOverlap = false;
            for (index = 0; index < state.sideBarLists.length; index++) {
                if (state.sideBarLists[index]._id === listId) {
                    break
                }
            }
            for (var i = 0; i < state.playLists.length; i++) {
                if (state.playLists.length && state.playLists[i]._id === listId) {
                    isOverlap = true
                }
            }
            if (!isOverlap) {
                var sideBarLists = [...state.sideBarLists];
                var removedList = sideBarLists.splice(index, 1);
                var playLists = [...state.playLists, ...removedList]
                return { ...state, playLists, sideBarLists }

            } else {
                sideBarLists = [...state.sideBarLists];
                removedList = sideBarLists.splice(index, 1);
                return { ...state, sideBarLists }
            }

        case 'REMOVE_PLAY_LIST':
            listId = action.payload;
            isOverlap = false;
            for (index = 0; index < state.playLists.length; index++) {
                if (state.playLists[index]._id === listId)
                    break
            }
            for (var i = 0; i < state.sideBarLists.length; i++) {
                if (state.sideBarLists.length && state.sideBarLists[i]._id === listId) {
                    isOverlap = true
                }
            }
            if (!isOverlap) {
                playLists = [...state.playLists];
                removedList = playLists.splice(index, 1);
                sideBarLists = [...state.sideBarLists, ...removedList];
                return { ...state, playLists, sideBarLists }
            } else {
                playLists = [...state.playLists];
                removedList = playLists.splice(index, 1);
                return { ...state, playLists }
            }

        default:
            return state;
    }
};

export default soundReducer;
