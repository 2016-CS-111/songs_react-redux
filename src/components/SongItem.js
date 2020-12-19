import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongItem = ({ song, selectSong }) => {
    return (
        <div className='item'>
            <div className='right floated content'>
                <button className='ui inverted button' onClick={() => selectSong(song)}>Select</button>
            </div>
            <div className='content'>{song.title}</div>
        </div>
    )
};

export default connect(null, { selectSong })(SongItem);