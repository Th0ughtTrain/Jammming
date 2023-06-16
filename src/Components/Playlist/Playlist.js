import React from "react";
//import Tracklist from '../Tracklist/Tracklist';
import {Tracks} from '../Tracks/Tracks';
import Track from '../Track/Track';
import "./Playlist.css"

const Playlist = (props) => {

    let results = props.results
    let setResults = props.setResults
    console.log(results)

    return (
        <div className="Playlist">
            <input defaultValue="New Playlist"/>
            {
            /* so this portion is the exact same in searchResult though the status it looks for is different.
                the way it works is if the values are equal it will render the component otherwise it wont. So next look at the track
                component, it has the function that changes the status property. 
              */  
            results.map(track => {
                    console.log(track)
                    if (track.status === "playlist") {
                        {return <Track key={track.id} trackObject={track} isRemoval={true} results={results} setResults={setResults}/>}
                    } else {
                        return
                    }
                })
            }
                {console.log(Track)}
            <p>'Add a track to the playlist!'</p>

            <button className="savePlaylist">Save to Spotify</button>
        </div>
    )
}

export default Playlist;