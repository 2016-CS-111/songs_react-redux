import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ( {selectedSong} ) => {
    if (!selectedSong) {
        return null;
    };

    return (
        <div className='ui placeholder segment' style={{ backgroundColor: 'lightseagreen' }}>
            <div className='ui header'>Details For:</div>
            <div><h3>Title:</h3>{selectedSong.title}</div>
            <div><h3>Full Title:</h3>{selectedSong.full_title}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);