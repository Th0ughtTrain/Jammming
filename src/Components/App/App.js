import React, { useState,useEffect } from  'react';
import SearchBar from  "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"
import logo from "./jammingpanda.png"
import {Tracks} from "../Tracks/Tracks"


import "./App.css";

const App = () => {   
    
    /* I created a empty an array to hold the tracks you probably would need
    to hold the tracks from the api in a different manner but I would just play around with it
       | |
        V
    */
    let trackList = []

    /* 
    I array.mapped the imported tracks and array.pushed them into the tracklist
    I also added a search property that each component will read
    to decide if the track will go in their sections
       | |
        V
    */

    Tracks.map ((tracks) => {
        tracks.status = "search" /* <== this is set to search by default we will have an option to set it to playlist and back */
         trackList.push(tracks)
         return
    })

    /* 
    I set a state object that saves the tracklist into state we will feed this to the playlist and
    search components to feed to the tracks. The important part here is the setResults this will allow us to change
    the status property and rerender the app which again each component will read. You can pass down a set state
    function and use it in a child component to update a state object in a parent component. I left the console.logs in so you can see
    the innerworkings. I use console.log quite often for various things but mainly to see if a variable or 
    Object (arrays, object literals, ..etc,) is holding data.
       | |
        V
    */
    
    const [results, setResults] = useState(trackList)

    /* this was just to check if the result state object had the tracks in it */

   console.log(results.map((tracks) => {
        return tracks
   }))
   /* in the return i passed down the state object (results) and the set state function (setResults) to the components as props
        you can go to both searchResults and Playlist to see how I handled rendering the tracks. It very similar to how you did it initially
        however now it is using the status property instead of the isRemoval state object.
   */
    return (
        <div className="Jamming">
            <h1>Jammming with The Obstinate Panda!</h1>
            <img src={logo} alt='panda logo' className="logo" />
            <div className="App">    
                    <SearchBar/>
            </div>
            <div className="tracks">
                <div className="SearchResults">
                    <SearchResults results={results} setResults={setResults}  /> {/* state in props */}
                </div>    
                <div className="Playlist" >    
                    <Playlist results={results} setResults={setResults}/> {/* state in props */}
                </div>
            </div>
        </div>
        )   
    }


export default App;