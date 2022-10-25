import { createCSV, fetchArtists } from '../utils/utils.js';

export const getArtists = async (req, res) => {
  const { artistname, filename, limit, page } = req.query;

  if (!artistname || !filename) {
    return res.status(400).json({ message: 'please include the artist name and the filename' });
  }

  try {
    fetchArtists(artistname, limit, page);

    const response = await fetchArtists(artistname, limit, page);
    let { results } = await response.json();

    if (+results['opensearch:totalResults'] === 0) {
      const artists = ['Cher', 'Mozart', 'Jarabe de Palo'];
      const artistname = artists[Math.floor(Math.random() * artists.length)];

      const data = await fetchArtists(artistname, limit, page);
      const response = await data.json();
      results = response.results;
    }

    const artistData = results.artistmatches.artist.map((dataArtist) => {
      const { name, mbid, url, image } = dataArtist;

      const artistObject = {
        name,
        mbid,
        url,
        image: image[0]['#text'],
      };

      return artistObject;
    });

    createCSV(artistData, filename);
    return res.status(200).json(artistData);
  } catch (error) {
    res.status(404).json({ message: `something went wrong. ${error}` });
  }
};
