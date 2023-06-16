import React, { useState } from "react";
import "./Track.css";

const Track = (props) => {
   
    let results = props.results
    let setResults = props.setResults

    /* This function allows us to change the status function and rerender. I'll break it down by each part */

    /* to start I declared a function (this is just one way to declare)
        i put a parameter of side which we will put a string as an argument when we call the function
    */
    function switchComponent(side){ 
        /* the function calls setResults */ 
        setResults(
            /* the function calls the map method on the results state object
                (a method is a function that is declared inside an object definitely learn about objects and prototypes)
            */
            results.map((tracks) => {
                /* I console.log here to make sure that the method was correct you can see the results in the developer console */
                console.log (tracks.trackName)

                /* this if statement compares the results trackname to the props track name
                    you might have to make changes here when you eventually add the api as you might not have
                    a Tracks.js file to pull from (unless you store the api results there first). 
                    though whatever method you choose to store the results you can modify this function to suit your needs
                */
                if (tracks.trackName == props.trackObject.trackName) {
                    
                    /* as the map method iterates through the tracks if the track names match it will return all the track properties
                         but change the status property to whatever argument you put in the switchComponent 
                    */

                    return {...tracks, status: side}
                }
                return tracks
            })
        )
    }

    function takeAction() {
        /* 
            this is exactly the same as you had it before except I added in the switchComponent
            when you call the function the app will rerender with the new state and the searchResults
            and playlist components will read the status of each track to decide if it will render them.            
        */

        if (props.trackObject.status == "search"){
            return <button className="takeAction" onClick={() => switchComponent(("playlist"))}
            >+</button>
        } else {
            return <button className="takeAction" onClick={() => switchComponent("search")}
            >-</button>
        }
    }

    return (
       <div className="Track" >
            <div className="Trackinfo">
                <h3>{props.trackObject.trackName}</h3>
                <p>Artist: {props.trackObject.trackArtist}</p>
                <p className="from">Album: {props.trackObject.trackAlbum}</p>
            </div>
            {takeAction()}
       </div> 
    )
}

export default Track;