require("dotenv").config();
const Spotify = require("node-spotify-api");


const keys = require("./keys.js");
const axios = require("axios");
const moment = require("moment");

const spotify = new Spotify(keys.spotify);


const option = process.argv[2];

const term = process.argv.slice(3).join("+");



switch (option) {

    case 'concert-this':
        console.log("Giving you the next concert for " + term + "!")
        const URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id="+ keys.bandisintown.id;
        axios.get(URL).then(function (response) {
            const info = response.data[0];

            console.log(
                `
----------VENUE INFO----------
Venue:     ${info.venue.name}
Location:  ${info.venue.city}, ${info.venue.region}
Date:      ${moment(info.datetime)}
`
            )
        })

        break;


    case 'spotify-this-song':

        break;


    case 'movie-this':
        console.log("Giving you OMDB info for " + term + "!")
        URL = "http://www.omdbapi.com/?apikey=" + keys.omdb.secret + "&t=" + term;
        axios.get(URL).then(function (response) {
            const info = response.data[0];

            console.log(`
----------MOVIE INFO----------
Title:              ${info.venue.name}
Year:               ${info.venue.city}, ${info.venue.region}
IMDB:               ${moment(info.datetime)}
Rotten Tomatoes:    
Country:
Language:
-------------PLOT-------------

-------------CAST-------------
            `)
        })
        break;


    case 'do-what-it-says':


        break;

}