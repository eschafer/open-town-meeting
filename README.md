# Open Town Meeting

## Description

This is a full stack web app to help make Town Meeting easier to follow. Based off @cscott's ideas here: https://github.com/cscott/open-town-meeting/blob/main/NOTES.md

The website uses [Remix](https://remix.run/) and is deployed to [Cloudflare Pages](https://pages.cloudflare.com/). Serverless functions are used for [Firebase Authentication](https://firebase.google.com/products/auth/) (log in with Google) and a graphql API. Data is stored in a [Cloudflare D1](https://www.cloudflare.com/developer-platform/d1/) SQL database.

![Mind map showing the main components of the website: frontend (remix, material ui), serverless functions (firebase authentication, graphql api), database (cloudflare d1 sql), deployment (cloudflare pages), and testing (jest, react testing library).](./docs/diagram.png)

## Installation

Clone the repository and install the dependencies with `npm ci`.

## Usage

Run the project locally with `npm run pages:dev`. This starts the development server at [http://localhost:8788](http://localhost:8788).

_TODO: Add info about how to set up a local database for testing._

## Contributing

I'm working on this myself for now, but hoping to open it up to contributions at some point.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or concerns, please open an issue on this repository.
