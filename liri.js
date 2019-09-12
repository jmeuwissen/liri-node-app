require("dotenv").config();


const keys = require("./keys.js");
const axios = require("axios")

const 
// const spotify = new Spotify(keys.spotify);

const option = process.argv[2];

const term = process.argv.slice(3).join("+");

// console.log(

// `
// --------------

// testing template literal

// --------------
    
// `
// )



switch (option) {
    case 'concert-this':
        const URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";



        break;


    case 'spotify-this-song':

        break;


    case 'movie-this':

        break;


    case 'do-what-it-says':


        break;

}