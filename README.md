# FEC - Host Service for Airbnb Item Page

> Host Service module clone of Airbnb's created with Node.js, React and MongoDB

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

  - GET URL: http://3.12.169.208:2001/api/location/:listingId
  - GET Endpoint: /api/location/:listingId (GET: /api/location/0)

    Sample Output:
        {
            "listingId": [
                0,
                92,
                27
            ],
            "languages": [],
            "_id": "5eefdd4f50523cd61aaccc77",
            "hostId": 18,
            "fullName": "Mable Zemlak Jr.",
            "joined": "Mon Jan 13 2020 01:31:21 GMT-0800 (Pacific Standard Time)",
            "photoUrl": "http://lorempixel.com/640/480/people",
            "superhost": "true",
            "verification": "Verified",
            "description": "Earum minus sapiente corporis. Ratione delectus nihil inventore non iusto distinctio natus. Inventore adipisci ut at atque ex atque est et adipisci. Est nobis sit amet optio et ut in debitis.",
            "duringYourStay": null,
            "responseRate": 26,
            "responseTime": "within an hour",
            "__v": 0
        }

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

