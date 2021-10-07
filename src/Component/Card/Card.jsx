import React from "react";
import './Card.css';
import MusicImage from '../../assets/img/music.jpg';

const Card = (props) => {
    return (
        <div className="col-lg-4 col-sm-6 col-xs-12">
            <div className="card mt-3 rounded bg-info text-white shadow-lg"
                onClick={() => props.goDetail(props.data.songId)}>
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col-3">
                            <img className="img-fluid" src={MusicImage} alt={props.data.songTitle} />
                        </div>
                        <div className="col-9 my-auto">
                            <h5 className="mb-1">{props.data.artist}</h5>
                            <p className="mb-0">{props.data.songTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
