export const setSideBarData = (data) => ({
    type: 'SET_PLAY_LIST',
    payload: data
});

export const addPlayList = (data) => ({
    type: 'ADD_PLAY_LIST',
    payload: data
});

export const removePlayList = (data) => ({
    type: 'REMOVE_PLAY_LIST',
    payload: data
});

