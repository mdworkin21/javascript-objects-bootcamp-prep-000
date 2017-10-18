var playlist = {
  Radiohead: "Karma Police"
}

function updatePlaylist (playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

var playlist = {Kanye: "Gold Digger"}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
      }
