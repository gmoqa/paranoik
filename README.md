# paranoik
[![NPM Version][npm-version-image]][npm-url] ![size] ![license]

Check integrity of each request using a custom HTTP header checksum.

 The hash is formed by [`request url`, `request method`, `request data`, `request user-agent`, `secret key`] in a MD5 hash function.  

## Installation

```bash
npm install paranoik
```


## Basic Usage

```js
const express = require('express');
const paranoik = require('paranoik');

const app = express();

app.use(paranoik('YOUR_SECRET'));
```

##Configuration
```js
const options = {
    secret: YOUR_SECRET,
    whitelist: [
        '/login',
        '/recovery'
    ]
};

app.use(paranoik(options));
```

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.org/package/paranoik
[license]: https://badgen.net/npm/license/paranoik
[dependencies]: https://badgen.net/npm/dependencies/paranoik
[size]: https://badgen.net/packagephobia/install/paranoik
[npm-version-image]: https://badgen.net/npm/v/paranoik
