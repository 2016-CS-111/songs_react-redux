import React from 'react';
import { connect } from 'react-redux';
import SongItem from './SongItem';

const SongList = ({ songs }) => {
    
    const songList = songs.map( (song) => {
        return <SongItem key={song.id} song={song} />;
    });

    return(
        <div className='ui segment' style={{ backgroundColor: 'lightpink' }}>
            <div className='ui inverted segment'>
                <div className='ui divided list'>{songList}</div>
            </div>
        </div>
    );  
};

const mapStateToProps = (state) => {
    return ({
        songs: state.songs
    });
};

export default connect(mapStateToProps)(SongList);