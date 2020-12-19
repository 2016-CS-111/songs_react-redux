import React from 'react';
import { connect } from 'react-redux';

const Loader = ({ selectedSong, message }) => {
    if (!selectedSong) {
        return (
            <div className='ui active dimmer'>
                <div className='ui big text loader'>{message}</div>
            </div>
        );
    };
    return null;
};

Loader.defaultProps = {
    message: 'Loading...!'
};

const mapStateToProps = state => {
    return ({ 
        selectedSong: state.selectedSong 
    });
}

export default connect(mapStateToProps)(Loader);