import React from 'react';

class SongDetail extends React.Component {
    constructor(props) {
        super(props);
        this.widthRef = React.createRef();
    }

    componentDidUpdate() {
        const width = this.widthRef.current.offsetWidth;
        this.props.onWidthChange(width);
    }
    
    render() {
        if (!this.props.selectedSong) {
            return (
                <div className='ui loading segment' style={{  width: '500px', height: '500px' }}></div>
            )
        }

        return (
            <div ref={this.widthRef}>
                <div className='ui placeholder segment' style={{ height: `300px`,backgroundColor: 'lightseagreen' }}>
                    <div className='ui header'>Details For:</div>
                    <div>Title: {this.props.selectedSong}</div>
                </div>
            </div>
        );
    }
};

export default SongDetail;