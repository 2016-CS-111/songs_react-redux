import { combineReducers } from "redux";

// Reducers
const songListReducer = (ListofSongs=[], action) => {
    if (action.type === 'SONG_LISTING') {
        return action.payload;
    }
    return ListofSongs;
    // return [{title: 'Rose', length: '1:00'}, {title: 'Merry', length: '3:30'}, {title: 'Cathy', length: '4:00'}, {title: 'Kei', length: '2:00'}, {title: 'Marlo', length: '9:20'}];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer
});
