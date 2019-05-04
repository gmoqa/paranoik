# paranoik
[![NPM Version][npm-version-image]][npm-url] ![size] ![license]

>HTTP request checksum integrity verifier middleware for Express.js.

## Installation

```bash
npm install paranoik
```

## Usage

```js
const express = require('express');
const paranoik = require('paranoik');

const app = express();

app.use(paranoik({ YOUR_SECRET }));
```

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.org/package/paranoik
[license]: https://badgen.net/npm/license/paranoik
[dependencies]: https://badgen.net/npm/dependencies/paranoik
[size]: https://badgen.net/packagephobia/install/paranoik
[npm-version-image]: https://badgen.net/npm/v/paranoik
