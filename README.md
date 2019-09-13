# liri-node-app
Language Interpretation and Recognition Interface

## Purpose

The purpose of this app is to retrieve one of three sets of information:

* Next show time and venue of a band on-tour from Bandsintown

* Information about a song from Spotify

* Imformation about a movie from OMDB

These are specified via command-line arguments upon executing the program. These options may also be specified via file-input, after issuing the file input option via command-line arguments

## Usage

The options for execution are as follows:

* `concert-this "artist"`

* `spotify-this-song "song"`

* `movie-this "movie"`

* `do-what-it-says`

Each option is given its own function (except for the file reader option because it was so simple), which executes depending upon a switch statement

