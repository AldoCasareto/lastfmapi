# Lastfm API

## Task requirements

Write a Node.js REST API that handles allows the user to search for an artist and writes the results to csv file. If the artist is not found, it should return results for an array of hardcoded artists.

## Technology

The app is built with NodeJs and Express

## Features

- Search your favorite artist in the lastfm database
- The results (name, mbid, url, image) are automatically saved into a CSV-file.

## Instructions

- Get a lastfm API_KEY from the following link https://www.last.fm/api/account/create. You need to provide your email address and application name. Remember to write down your key!
- Clone the repository and install the dependencies
- In the project root, rename the '.env.example' to '.env'. Insert your api key
- Run the api by executing "nodemon" or "npm run dev"
- Send a GET request with the following queries:
  -- artistname and filename (mandatory)
  -- page and limit (optional)
- A csv file will be generated, if the file is already created and you send the same filename, it will append the new data, otherwise, it will create a new csv
