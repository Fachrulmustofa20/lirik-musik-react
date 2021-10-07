import axios from 'axios';
import React, { Component } from 'react';
import Card from '../../../Component/Card/Card';
import { Link } from 'react-router-dom';
import CardSkeleton from '../../../Component/Card/CardSkeleton';

class Home extends Component{
  state = {
    lyrics: null
  }

  getPostAPI = () => {
    axios.get('http://api-song-lyrics.herokuapp.com/hot')
      .then( res => {
        this.setState({
          lyrics: res.data.data
        })
      }, (err) => {
        console.log('error: ', err);
      })
  }

  handleDetail = (songId) => {
    this.props.history.push(`/lyrics/${songId}`);
  }

  componentDidMount(){
    this.getPostAPI();
  }

  render(){
    console.log(this.state.lyrics);
    return(
        <div className="container">
          <div className="d-flex flex-row justify-content-between mt-4">
            <h4 className="mb-0">Top Lirik</h4>
            <Link to="/top" className="text-dark my-auto mb-0">
              Lihat Semua
            </Link>
          </div>
          <div className="row mb-5 pb-5">
            {this.state.lyrics && this.state.lyrics.slice(0, 6).map(lyrics => {
                return <Card key={lyrics.songId} data={lyrics} goDetail={this.handleDetail} />
            })}
            {!this.state.lyrics && [1,2,3,4,5,6].map(num => <CardSkeleton key={num}/> )}
          </div>
        </div>
    )
  }
}

export default Home;