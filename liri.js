require("dotenv").config();

const spotify = new Spotify(keys.spotify);

const option = process.argv[2];
