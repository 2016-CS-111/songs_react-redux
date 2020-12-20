// Action Creator

export const songsList = (ListofSongs) => {
    return { 
        type: 'SONG_LISTING',
        payload: ListofSongs
    };
};

export const selectSong = selectedSong => {
    return {
        type: 'SONG_SELECTED',
        payload: selectedSong
    };
};
