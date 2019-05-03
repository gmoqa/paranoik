# paranoik

HTTP request signature verifier middleware for express.js

## Usage

```js
const express = require('express');
const paranoik = require('paranoik');

const app = express();

app.use(paranoik(process.env.SECRET))
```
