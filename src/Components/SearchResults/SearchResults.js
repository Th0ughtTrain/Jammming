import React from "react";
//import Tracklist from "../Tracklist/Tracklist"
import { Tracks } from '../Tracks/Tracks';
import Track from '../Track/Track';
import "./SearchResults.css"


const SearchResults = (props) => {

    console.log(props)

    let results = props.results
    let setResults = props.setResults

    return(
        <div className="SearchResults">
            <div>
            </div>
            <h2>Results</h2>
            {
              /* so this portion is the exact same in playlist though the status it looks for is different.
                the way it works is if the values are equal it will render the component otherwise it wont. So next look at the track
                component, it has the function that changes the status property. 
              */  
            results.map(track => {
                    console.log(track)
                    if (track.status === "search") {
                        {return <Track key={track.id} trackObject={track} isRemoval={true} results={results} setResults={setResults}/>}
                    } else {
                        return
                    }
                })
            }
            
        </div>
    )
}

export default SearchResults;