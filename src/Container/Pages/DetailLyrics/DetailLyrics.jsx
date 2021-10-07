import axios from "axios";
import React, { Component, Fragment } from "react";
import DetailLyricsSkeleton from "./DetailLyricsSkeleton";

class DetailLyrics extends Component{
    state = {
        lyrics: {
            artist: null,
            songTitle: null,
            songLyricsArr: []
        }
    }
    componentDidMount() {
        let songId = this.props.match.params.songId;
        axios.get(`https://api-song-lyrics.herokuapp.com/lyrics/${songId}`)
            .then(res => {
                this.setState({
                    lyrics: {
                        artist: res.data.data.artist,
                        songTitle: res.data.data.songTitle,
                        songLyricsArr: res.data.data.songLyricsArr
                    }
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.state.lyrics);
        return (
            <Fragment>
                <div className="container text-center">
                    <h4 className="mt-4"><span className="font-weight-bold">{this.state.lyrics.songTitle}</span></h4> 
                    <h6 className="mb-3">{this.state.lyrics.artist}</h6> 
                    {this.state.lyrics.songLyricsArr.map((lyric, index) => {
                        return <p className="mb-2" key={index}>{lyric}</p>
                    })}
                </div>
                {!this.state.lyrics.artist && <DetailLyricsSkeleton />}
            </Fragment>
        );
    }
}

export default DetailLyrics;
