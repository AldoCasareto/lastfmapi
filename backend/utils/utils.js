import * as fs from 'fs';
import fetch from 'node-fetch';

//fetches aritsts from the lastfm endpoint
export const fetchArtists = (artistname, limit, page) => {
  const API_KEY = process.env.API_KEY;
  const data = fetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistname}&limit=${
      limit || ''
    }&page=${page || ''}&api_key=${API_KEY}&format=json`
  );

  return data;
};

// creates a CSV file, if the file exists with the same name, it appends the results, if it does not exist, it creates a new one
export const createCSV = (data, filename) => {
  const path = `./${filename}.csv`;

  let csv = '';
  let header = Object.keys(data[0]).join(',');
  let values = data.map((o) => Object.values(o).join(',')).join('\n');

  csv += header + '\n' + values;

  if (fs.existsSync(path)) {
    return fs.appendFile(`./${filename}.csv`, csv, (err) => {
      console.log(err || 'finished appending data to the csv');
    });
  }

  fs.writeFile(`./${filename}.csv`, csv, (err) => {
    console.log(err || 'finished creating the csv');
  });
};
