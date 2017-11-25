# ezMusic
An easy-to-use npm package used to get a song info using the Itunes API.

## Example
An example on how to use this package.

```js
var music = require('ezmusic');

music('Candy Paint', function(res) {
    console.log(res)
});
```

Output:

```js{ songName: 'Candy Paint',
  artist: 'Post Malone',
  album: 'The Fate of the Furious: The Album',
  genre: 'Hip-Hop/Rap',
  iconURL30: 'http://is3.mzstatic.com/image/thumb/Music111/v4/ac/44/ba/ac44ba60-094d-2983-ba29-925edf5cc841/source/30x30bb.jpg',
  iconURL60: 'http://is3.mzstatic.com/image/thumb/Music111/v4/ac/44/ba/ac44ba60-094d-2983-ba29-925edf5cc841/source/60x60bb.jpg',
  iconURL100: 'http://is3.mzstatic.com/image/thumb/Music111/v4/ac/44/ba/ac44ba60-094d-2983-ba29-925edf5cc841/source/100x100bb.jpg',
  trackURL: 'https://itunes.apple.com/us/album/candy-paint/1210537086?i=1210538362&uo=4' }
```

## Licence
Licensed under the MIT License
