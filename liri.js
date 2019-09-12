require("dotenv").config();
const Spotify = require("node-spotify-api");


const keys = require("./keys.js");
const axios = require("axios");
const moment = require("moment");
const fs = require("fs")

const spotify = new Spotify(keys.spotify);




function spotifier(searchTerm) {
    if (searchTerm.length < 1) {
        searchTerm = "The Sign";
    }

    console.log("Giving you OMDB info for " + searchTerm + "!");

    spotify.search({ type: 'track', query: searchTerm }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        const items = data.tracks.items;
        if (searchTerm === "The Sign") {
            trackInfo = items[
                //spotify barfed out 30+ song results in no particular order, so this finds the one matching the searchTerm
                //found on stack overflow, checks which element of the 'items' array has a 'name' property that matches 'The Sign'
                items.map(function (e) {
                    return e.name;
                }).indexOf(searchTerm)]
        }
        else trackInfo = items[0];
        console.log(`
----------TRACK INFO----------
Artist(s): ${trackInfo.artists[0].name}
Song Name: ${trackInfo.name}
Sample:    ${trackInfo.preview_url}
Album:     ${trackInfo.album.name}
      `);
    });

}


function concertFinder(searchTerm) {
    console.log("Giving you the next concert for " + searchTerm + "!")
    const URL = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=" + keys.bandisintown.id;
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

}

function movieFinder(searchTerm) {
    if (searchTerm.length < 1) {
        searchTerm = "Mr. Nobody";
    }

    console.log("Giving you OMDB info for " + searchTerm + "!")
    const URL = "http://www.omdbapi.com/?apikey=" + keys.omdb.secret + "&t=" + searchTerm;
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
}


//this adds the feature of handling indefinite "do-what-it-says" calls!
function switcher(option, term) {
    switch (option) {

        case 'concert-this':
            concertFinder(term)
            break;

        case 'spotify-this-song':
            spotifier(term);
            break;

        case 'movie-this':
            movieFinder(term);
            break;

        case 'do-what-it-says':

            fs.readFile("random.txt", "utf8", function (err, data) {
                fileChunks = data.split(",");
                console.log(fileChunks[1])
                switcher(fileChunks[0], fileChunks[1]);
            })
            break;

    }
}
switcher(process.argv[2], process.argv.slice(3).join(" "));


