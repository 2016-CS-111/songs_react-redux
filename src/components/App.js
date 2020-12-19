import React from "react";
import { connect } from 'react-redux';
import { songsList, selectSong } from '../actions';

import SongList from './SongList';
import SongDetail from './SongDetail';
import Loader from './Loader';
import genius from '../api/RapidAPI';

class App extends React.Component {
    componentDidMount = async() => {
        const response = await genius.get('artists/16775/songs');
        this.props.songsList(response.data.response.songs);
        this.props.selectSong(response.data.response.songs[0]);
    }

    render() {
        return (
            <div>
                <div>
                    <Loader />
                </div>
                <div className='ui container' style={{ marginTop: '10px' }}>
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className='ten wide column'>
                                <SongList />
                            </div>
                            <div className='six wide column'>
                                <SongDetail />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    console.log(state);
    return {
        songs: state.songs
    };
};

export default connect(mapStateToProps, { songsList, selectSong })(App);