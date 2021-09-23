export const selectSoundList = (data) => ({
    type: 'SOUNDLIST',
    payload: data
});

export const setData = (data) => ({
    type: 'SETSOUNDDATA',
    payload: data
})
