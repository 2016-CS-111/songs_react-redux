import React from 'react';

const SongItem = ({ song, onSelectSong }) => {
    const onButtonClick = (event) => {
        event.preventDefault();
        onSelectSong(song.full_title);
    }

    const MAXLENGTH = 45;
    return (
        <div className='ui segment' style={{ backgroundColor: 'lightpink' }}>
            <form>
                {song.full_title.length > MAXLENGTH ? 
                ( 
                    <div className='ui red ribbon label'>
                        {`${song.full_title.substring(0, MAXLENGTH)}...`}
                    </div>
                ) :
                    <div className='ui red ribbon label'>
                        {song.full_title}
                    </div>
                }
                <div className='ui inverted segment'>
                    <button className='ui inverted button' onClick={onButtonClick}>Select</button>
                </div>
            </form>
        </div>
    );
};

export default SongItem;