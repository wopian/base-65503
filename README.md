# base-65503

[![npm]][1]
[![npm installs]][1]
[![David]][7]

<!--
[![Travis]][2]
[![AppVeyor]][3]
[![CC Coverage]][4]
[![CC Score]][5]
[![CC Issues]][6]
-->

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

## License

All code released under [MIT]

[MIT]:https://github.com/wopian/base-65503/blob/master/LICENSE.md

[npm]:https://img.shields.io/npm/v/base-65503.svg?style=flat-square
[npm installs]:https://img.shields.io/npm/dt/base-65503.svg?style=flat-square
[Travis]:https://img.shields.io/travis/wopian/base-65503/master.svg?style=flat-square&label=linux%20%26%20macOS
[CC Coverage]:https://img.shields.io/codeclimate/coverage/github/wopian/base-65503.svg?style=flat-square
[CC Score]:https://img.shields.io/codeclimate/github/wopian/base-65503.svg?style=flat-square
[CC Issues]:https://img.shields.io/codeclimate/issues/github/wopian/base-65503.svg?style=flat-square
[David]:https://img.shields.io/david/wopian/base-65503.svg?style=flat-square
[AppVeyor]:https://img.shields.io/appveyor/ci/wopian/base-65503/master.svg?style=flat-square&label=windows
[1]:https://www.npmjs.com/package/base-65503
[2]:https://travis-ci.org/wopian/base-65503
[3]:https://ci.appveyor.com/project/wopian/base-65503
[4]:https://codeclimate.com/github/wopian/base-65503/coverage
[5]:https://codeclimate.com/github/wopian/base-65503
[6]:https://codeclimate.com/github/wopian/base-65503/issues
[7]:https://david-dm.org/wopian/base-65503
