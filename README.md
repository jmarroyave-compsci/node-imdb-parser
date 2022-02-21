# node-imdb-parser

A html parser for imdb 

# Badges

[![npm version](https://badge.fury.io/js/node-imdb-parser.svg)](https://badge.fury.io/js/node-imdb-parser)

# Use

Import the library using `require`

```js
const { IMDBParser } = require('node-imdb-parser')
```

or ES6 `import`

```js
import { IMDBParser } from 'node-imdb-parser'
```

Call `title` to parse a movie page
```js
const parse = new IMDBParser()

const htmlText = getHTMLText() // via: fetch, browser's saving page, zip...
const data = parse.title( htmlText )


Movie {
  title: 'Star Wars',
  ...
}
```

# Parser versions

## 2021 - A

<p align='center'>
	<img src="./res/2021-a/example.png" />
</p>


```json
{
  "info": {
    "id": "tt0076759",
    "release": "1977-05-25T04:00:00.000Z",
    "title": {
      "default": "Star Wars",
      "original": null,
      "akas": [
        "La guerra de las estrellas"
      ]
    },
    "onAir": "PG",
    "classification": "Rated PG for sci-fi violence and brief mild language",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "type": "movie",
    "tagline": "It's Back! The Force will be with you for three weeks only. (1979 Reissue Poster)",
    "keywords": [
      "rebellion",
      "galactic war",
      "princess",
      "lightsaber",
      "space opera"
    ],
    "language": [
      "English"
    ],
    "production": [
      {
        "name": "Lucasfilm",
        "href": "/company/co0071326?ref_=tt_dt_co_1"
      },
      {
        "name": "Twentieth Century Fox",
        "href": "/company/co0000756?ref_=tt_dt_co_2"
      }
    ],
    "filmLocations": "Tikal National Park, Guatemala",
    "countryOfOrigin": "United States",
    "ratings": {
      "imdb": {
        "rating": "8.6",
        "votes": "1.3M"
      },
      "metascore": "90"
    },
    "tech": {
      "color": [],
      "soundmix": [],
      "aspectRatio": "",
      "runtime": "2 hours 1 minute"
    },
    "links": {
      "officialSite": [
        "Disney+ Hotstar",
        "Lucasfilm Ltd. (United States)"
      ]
    }
  },
  "media": {
    "poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "trailer": "/video/vi1317709849?playlistId=tt0076759&ref_=tt_ov_vi",
    "photos": [
      "https://m.media-amazon.com/images/M/MV5BMTk3MTkzNTk3Ml5BMl5BanBnXkFtZTgwOTcyMzQyNDM@._V1_QL75_UY280_CR43,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjE1NzI5OTAwMl5BMl5BanBnXkFtZTgwMTgyMzQyNDM@._V1_QL75_UY280_CR34,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjQwMjIzNTk3OF5BMl5BanBnXkFtZTgwMjgyMzQyNDM@._V1_QL75_UX280_CR0,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjQ3NTM2Nzk2Ml5BMl5BanBnXkFtZTgwNDgyMzQyNDM@._V1_QL75_UY280_CR71,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjUyNDE4MTAwOF5BMl5BanBnXkFtZTgwNTgyMzQyNDM@._V1_QL75_UX280_CR0,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTkyODQ3ODE1MF5BMl5BanBnXkFtZTgwODgyMzQyNDM@._V1_QL75_UY280_CR105,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNDU1MjI0Nl5BMl5BanBnXkFtZTgwOTgyMzQyNDM@._V1_QL75_UX280_CR0,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjA4OTEwNDM2Nl5BMl5BanBnXkFtZTgwNTcyMzQyNDM@._V1_QL75_UY280_CR72,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTk3MDkyNzA1OV5BMl5BanBnXkFtZTgwNjcyMzQyNDM@._V1_QL75_UY280_CR72,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTUyMjgzMjczOF5BMl5BanBnXkFtZTgwNzcyMzQyNDM@._V1_QL75_UX280_CR0,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjQzMjEzNjUxOF5BMl5BanBnXkFtZTgwNTEwMzQyNDM@._V1_QL75_UX280_CR0,0,280,280_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNjA1OTMxNDg5N15BMl5BanBnXkFtZTgwMzUwMzg4MDI@._V1_QL75_UY280_CR189,0,280,280_.jpg"
    ],
    "videos": [
      "/video/vi1317709849/?ref_=tt_vi_i_1",
      "/video/vi2055257881/?ref_=tt_vi_i_2",
      "/video/vi684114201/?ref_=tt_vi_i_3",
      "/video/vi1477230105/?ref_=tt_vi_i_4",
      "/video/vi1943846425/?ref_=tt_vi_i_5",
      "/video/vi1638841881/?ref_=tt_vi_i_6",
      "/video/vi3487547161/?ref_=tt_vi_i_7",
      "/video/vi217759513/?ref_=tt_vi_i_8",
      "/video/vi3981163545/?ref_=tt_vi_i_9",
      "/video/vi2166078489/?ref_=tt_vi_i_10",
      "/video/vi2046344217/?ref_=tt_vi_i_11",
      "/video/vi4184259865/?ref_=tt_vi_i_12"
    ]
  },
  "crew": {
    "directors": [
      {
        "name": "George Lucas",
        "id": "nm0000184"
      },
      {
        "name": "George Lucas",
        "id": "nm0000184"
      }
    ],
    "stars": [
      {
        "name": "Mark Hamill",
        "id": "nm0000434"
      },
      {
        "name": "Harrison Ford",
        "id": "nm0000148"
      },
      {
        "name": "Carrie Fisher",
        "id": "nm0000402"
      },
      {
        "name": "Mark Hamill",
        "id": "nm0000434"
      },
      {
        "name": "Harrison Ford",
        "id": "nm0000148"
      },
      {
        "name": "Carrie Fisher",
        "id": "nm0000402"
      }
    ],
    "cast": [
      {
        "id": "nm0000434",
        "avatar": "https://m.media-amazon.com/images/M/MV5BOGY2MjI5MDQtOThmMC00ZGIwLWFmYjgtYWU4MzcxOGEwMGVkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_QL75_UY140_CR55,0,140,140_.jpg",
        "name": "Mark Hamill",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0000148",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_QL75_UX140_CR0,11,140,140_.jpg",
        "name": "Harrison Ford",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0000402",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMjM4ODU5MDY4MV5BMl5BanBnXkFtZTgwODY1MjQ5MDI@._V1_QL75_UX140_CR0,15,140,140_.jpg",
        "name": "Carrie Fisher",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0000027",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMTIxMTA5OTI2M15BMl5BanBnXkFtZTYwNjEwNjU2._V1_QL75_UX140_CR0,0,140,140_.jpg",
        "name": "Alec Guinness",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0001088",
        "avatar": "https://m.media-amazon.com/images/M/MV5BNTM4NzE4NTIwNl5BMl5BanBnXkFtZTYwMTYxNzM2._V1_QL75_UX140_CR0,9,140,140_.jpg",
        "name": "Peter Cushing",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0000355",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMzg3MzU2NTUxMF5BMl5BanBnXkFtZTcwMTE1NjI4NA@@._V1_QL75_UX140_CR0,2,140,140_.jpg",
        "name": "Anthony Daniels",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0048652",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMTg1OTA3MzU0NV5BMl5BanBnXkFtZTcwNjY2Njk4Nw@@._V1_QL75_UX140_CR0,12,140,140_.jpg",
        "name": "Kenny Baker",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0562679",
        "avatar": "https://m.media-amazon.com/images/M/MV5BNjg1NDUzMzM3NF5BMl5BanBnXkFtZTcwMDg4NTczMQ@@._V1_QL75_UX140_CR0,0,140,140_.jpg",
        "name": "Peter Mayhew",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0001190",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMTEyODc0MTUzODBeQTJeQWpwZ15BbWU4MDUyMjc3OTAx._V1_QL75_UX140_CR0,6,140,140_.jpg",
        "name": "David Prowse",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0114436",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMDkxYTdkZjUtNDM4ZS00YTM3LWI2MzktODM1MTlhYjJkZjI5XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_QL75_UY140_CR55,0,140,140_.jpg",
        "name": "Phil Brown",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0292235",
        "avatar": "https://m.media-amazon.com/images/M/MV5BNjVjMTVkZWItZDIyMy00ZDM4LTlhMWQtNWM4NTg4MDY3MjBmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_QL75_UY140_CR55,0,140,140_.jpg",
        "name": "Shelagh Fraser",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0701023",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMTM3OTkwNjk0NF5BMl5BanBnXkFtZTcwNjQzNTk0OA@@._V1_QL75_UX140_CR0,10,140,140_.jpg",
        "name": "Jack Purvis",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0567018",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMTVlNWNhZjEtOTA4Ny00MjZjLWFhNjUtZDQxNDY5ZDU2ODFjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_QL75_UX140_CR0,0,140,140_.jpg",
        "name": "Alex McCrindle",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0125952",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMGIyZjcxMDUtMjdhNy00NTkxLWE2OTEtMDZmNjAwZjZjNjYzXkEyXkFqcGdeQXVyNTEzNDY5MjM@._V1_QL75_UX140_CR0,22,140,140_.jpg",
        "name": "Eddie Byrne",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0377120",
        "avatar": "https://m.media-amazon.com/images/M/MV5BNjA1OTMxNDg5N15BMl5BanBnXkFtZTgwMzUwMzg4MDI@._V1_QL75_UY140_CR95,0,140,140_.jpg",
        "name": "Drewe Henley",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0493200",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMTQyMDE3NjA0OF5BMl5BanBnXkFtZTcwNDY0MTUwOA@@._V1_QL75_UX140_CR0,0,140,140_.jpg",
        "name": "Denis Lawson",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0353796",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMjA4Njk1ODY5OF5BMl5BanBnXkFtZTgwODcxNzAzMTE@._V1_QL75_UX140_CR0,0,140,140_.jpg",
        "name": "Garrick Hagon",
        "episodes": "",
        "year": ""
      },
      {
        "id": "nm0458161",
        "avatar": "https://m.media-amazon.com/images/M/MV5BYmU1YzdjMTUtZjQ4My00Yjc5LTk1ZjgtMzUxNjIwZmY4ZTg5XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_QL75_UY140_CR95,0,140,140_.jpg",
        "name": "Jack Klaff",
        "episodes": "",
        "year": ""
      }
    ]
  },
  "related": [
    {
      "id": "tt0080684",
      "poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX140_CR0,5,140,207_.jpg",
      "title": "Star Wars: Episode V - The Empire Strikes Back"
    },
    {
      "id": "tt0086190",
      "poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX140_CR0,5,140,207_.jpg",
      "title": "Star Wars: Episode VI - Return of the Jedi"
    },
    {
      "id": "tt0121766",
      "poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_QL75_UY207_CR8,0,140,207_.jpg",
      "title": "Star Wars: Episode III - Revenge of the Sith"
    },
    {
      "id": "tt0120915",
      "poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX140_CR0,1,140,207_.jpg",
      "title": "Star Wars: Episode I - The Phantom Menace"
    },
    {
      "id": "tt0121765",
      "poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_QL75_UX140_CR0,2,140,207_.jpg",
      "title": "Star Wars: Episode II - Attack of the Clones"
    },
    {
      "id": "tt2488496",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_QL75_UY207_CR0,0,140,207_.jpg",
      "title": "Star Wars: Episode VII - The Force Awakens"
    },
    {
      "id": "tt3748528",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_QL75_UX140_CR0,0,140,207_.jpg",
      "title": "Rogue One"
    },
    {
      "id": "tt2527336",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_QL75_UX140_CR0,0,140,207_.jpg",
      "title": "Star Wars: Episode VIII - The Last Jedi"
    },
    {
      "id": "tt0088763",
      "poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX140_CR0,5,140,207_.jpg",
      "title": "Back to the Future"
    },
    {
      "id": "tt2527338",
      "poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_QL75_UX140_CR0,0,140,207_.jpg",
      "title": "Star Wars: Episode IX - The Rise of Skywalker"
    },
    {
      "id": "tt3778644",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_QL75_UX140_CR0,0,140,207_.jpg",
      "title": "Solo: A Star Wars Story"
    },
    {
      "id": "tt0167261",
      "poster": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX140_CR0,5,140,207_.jpg",
      "title": "The Lord of the Rings: The Two Towers"
    }
  ],
  "seasons": [],
  "version": 3
}

```
# FAQ

## FAQ1

ANSWER1
