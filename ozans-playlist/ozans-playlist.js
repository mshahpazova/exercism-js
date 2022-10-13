// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  let uniq = new Set(playlist);
  return Array.from(uniq.values());
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  let uniq = new Set(playlist);
  return uniq.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let uniq = new Set(playlist);
  uniq.add(track);
  return Array.from(uniq.values());
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let uniq = new Set(playlist);
  uniq.delete(track);
  return Array.from(uniq.values());
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  // playlist.map((x) => x.match(/\s+\-\s+(?<band>.+)$/).groups["band"]))
  let uniqMusicians = new Set(playlist.map((el) => el.split(/\s+\-\s+/)[1]));
  return Array.from(uniqMusicians);
}
