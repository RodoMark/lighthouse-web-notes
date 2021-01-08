# OBJECT KEYS

### I find it tricky to get the values out of keys in nested objects.

Here are examples of where I ended up doing that. Notice that I need to use `"string"` notation when I want to access a string, but when it's a `variable` then I need to enter it without quotes.

```Javascript
const playlists = {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks

  printPlaylists = function() {
    for (let playlist in playlists) {
      console.log(playlists[playlist]["name"]);
      console.log(playlists[playlist]["tracks"].join(", "));
    }

  addPlaylist = function(name) {
    let playlistNumber = `p0${Object.keys(playlists).length + 1}`;
    playlists[playlistNumber] = {};
    let newPlaylist = playlists[playlistNumber];
    newPlaylist["id"] = generateUid();
    newPlaylist.name = name;
  },
```
