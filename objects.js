var playlist = {beyonce: 'diva'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})

}
['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'
