require("dotenv").config();
const Spotify = require("node-spotify-api");


const keys = require("./keys.js");
const axios = require("axios");
const moment = require("moment");

const spotify = new Spotify(keys.spotify);


const option = process.argv[2];

let term = process.argv.slice(3).join(" ");
let URL = "";



switch (option) {

    case 'concert-this':
        console.log("Giving you the next concert for " + term + "!")
        URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id="+ keys.bandisintown.id;
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
        if (process.argv.length < 4) {
            term = "Mr. Nobody";
        }

        console.log("Giving you OMDB info for " + term + "!")
        URL = "http://www.omdbapi.com/?apikey=" + keys.omdb.secret + "&t=" + term;
        axios.get(URL).then(function (response) {
            const info = response.data;


            let nullHandler;
            if (info.Ratings.length < 2) nullHandler = "N/A";
            else nullHandler = info.Ratings[1].Value;


            console.log(`
----------MOVIE INFO----------
Title:              ${info.Title}
Year:               ${info.Year}
IMDB:               ${info.Ratings[0].Value}
Rotten Tomatoes:    ${nullHandler}
Country:            ${info.Country}
Language:           ${info.Language}

-------------PLOT-------------
${info.Plot}

--------NOTABLE ACTORS--------
${info.Actors}
            `)
        })
        break;


    case 'do-what-it-says':


        break;

}