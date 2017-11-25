const request = require('superagent');

var chip = {};

module.exports = function(song, callback) {
    chip.music(song, callback);
};

chip.music = async function(song, callback) {
    var response = request.get("https://itunes.apple.com/us/search")

    if(response) {
        request.get("https://itunes.apple.com/us/search")
        .query(({'term': song}))
        .query(({'media':'music'}))
        .end(function(err, res) {
            // console.log(res) enable for more info
            var jsonString = JSON.parse(res.text);
            const result = jsonString.results[0];

            if(jsonString.results[0] === undefined) { // Checking if the song name is invalid
            return console.log('Invalid title!');
            }

            var songName = result.trackName;
            var artist = result.artistName;
            var album = result.collectionName;
            var genre = result.primaryGenreName;
            var imageIcon30 = result.artworkUrl30;
            var imageIcon60 = result.artworkUrl60;
            var imageIcon100 = result.artworkUrl100;
            var trackURL = result.trackViewUrl;

            const songInfo = {'songName': songName, 'artist': artist, 'album': album, 'genre': genre, 'iconURL30': imageIcon30, 'iconURL60': imageIcon60, 'iconURL100': imageIcon100, 'trackURL': trackURL}; // Creating the object (output)

            return callback(songInfo);
        }); // end of .end()
    } // end of if(response)
} // end of module
