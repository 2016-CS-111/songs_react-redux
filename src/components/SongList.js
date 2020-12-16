import React from 'react';
import SongItem from './SongItem';

const SongList = ({ songs, onSelectSong }) => {
    const songsList = songs.map( (song) => {
        return <SongItem key={song.id} song={song} onSelectSong={onSelectSong}/>
    });

    return(
        <div>{songsList}</div>
    );  
}

export default SongList;