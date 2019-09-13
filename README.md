# [liri-node-app](https://github.com/jmeuwissen/liri-node-app)
Language Interpretation and Recognition Interface

## Purpose

The purpose of this app is to retrieve one of three sets of information and print it in the terminal window:

* Next show time and venue of a band on-tour from Bandsintown

* Information about a song from Spotify

* Imformation about a movie from OMDB

These are specified via command-line arguments upon executing the program. These options may also be specified via file-input, after issuing the file input option via command-line arguments

## Usage

The options for execution are as follows:

### concert-this

* `concert-this "artist"` gives Bandisintown info

#### With Input
![stuff](/assets/images/concert-this.PNG)


* `spotify-this-song "song"` gives Spotify info


#### Default

!(./assets/images/)

#### With Input

!(./assets/images/)

* `movie-this "movie"` give IMDB info


#### Default

!(./assets/images/)

#### With Input

!(./assets/images/)

* `do-what-it-says` executes the contents of random.txt as though it was passed as command line options

![stuff](/assets/images/)

## Technology

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * [OMDB API](http://www.omdbapi.com)

     * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)

## Implementation

For control flow, the program uses a switch statement dictated by arvc[2]. Each case of the switch is given its own function (except for the file reader option because it was so simple). This was done for ease of execution of the file-input option. 

OMDB and Band In Town were both called directly, with axios.get for simplification. Moment.js was used to format the showtime for the concert option. Spotify was called indirectly via Node-Spotify-API. Javascript fs was used to read 'random.txt'

