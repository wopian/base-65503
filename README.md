# base-65503

65503 base encode & decode numbers using all 1-3 byte unicode code points

Currently does not support strings or negative numbers

## Install

```
yarn add base-65503
```

or

```
npm install base-65503 --save
```

## Usage

```js
// ES6/Babel/Webpack
import { encode, decode } from 'base-65503'
// CommonJS/Browserify
const { encode, decode } = require('base-65503')

console.log(encode(1)) // !

console.log(decode('!')) // 1
```
