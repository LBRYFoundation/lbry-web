# LBRY Web

[![Node.js CI](https://github.com/LBRYFoundation/lbry-web/actions/workflows/node.js.yml/badge.svg)](https://github.com/LBRYFoundation/lbry-web/actions/workflows/node.js.yml)
[![Docker Image CI](https://github.com/LBRYFoundation/lbry-web/actions/workflows/docker-image.yml/badge.svg)](https://github.com/LBRYFoundation/lbry-web/actions/workflows/docker-image.yml)

The LBRY Web interface to interact with the LBRY Daemon from in the browser.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optional, for containerized setup)

Installing dependencies, when not using a containerized setup:

```shell
npm install
```

## Usage

Running development server:

```shell
npm run dev
```

Build the project:

```shell
npm run build
```

Run the server:

```shell
npm run start
```

### With Docker

Building the image:

```shell
docker build . -t lbry-web
```

Running the container:

```shell
docker run --name lbry-web --network host --restart always lbry-web
```

### With Docker Compose

```shell
docker compose build
docker compose up -d
```

## License

This project is MIT licensed. For the full license, see [LICENSE](LICENSE.md).
