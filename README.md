# [@fav/arith.divide][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Calculates an accurate quotient of two numbers.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/arith.number @fav/arith.divide
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/arith.divide/` directory manually.*


## Usage

For Node.js:

```js
var ArithNumber = require('@fav/arith.number');
var divide = require('@fav/arith.divide');

var num1 = ArithNumber.of(1.23) // => { numerator: 123, denominator: 1, exponent: -2 }

var num2 = ArithNumber.of('0.4') // => { numerator: 4, denominator: 1, exponent: -1 }

1.23 / 0.4 // => 3.0749999999999997

var num3 = divide(num1, num2) // => { numerator: 3075, denominator: 1, exponent: -3 }
num3.toApproximateString() // => '3.075'
```

For Web browsers:

```html
<script src="fav.arith.number.min.js"></script>
<script>
var ArithNumber = fav.arith.number;
var divide = fav.arith.divide;

var num1 = ArithNumber.of(1.23) // => { numerator: 123, denominator: 1, exponent: -2 }

var num2 = ArithNumber.of('0.4') // => { numerator: 4, denominator: 1, exponent: -1 }

1.23 / 0.4 // => 3.0749999999999997

var num3 = divide(num1, num2) // => { numerator: 3075, denominator: 1, exponent: -3 }
num3.toApproximateString() // => '3.075'
</script>
```


## API

### <u>divide(arithNum1, arithNum2) : ArithNumber</u>

Divides *arithNum1* and *arithNum2* and create a new ArithNumber object which has the quotient of these two numbers.

#### Parameters:

| Parameter    |  Type       | Description                            |
|:-------------|:-----------:|:---------------------------------------|
| *arithNum1*  | ArithNumber | An ArithNumber object to be divided.   |
| *arithNum2*  | ArithNumber | An ArithNumber object to be divided.   |

#### Returns:

The quotient of two values of ArithNumber objects. 

**Type:** ArithNumber

## Checked                                                                      

### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-arith.divide/
[npm-img]: https://img.shields.io/badge/npm-v0.1.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/arith.divide
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-arith.divide.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-arith.divide
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-arith.divide?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-arith-divide
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-arith.divide/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-arith.divide?branch=master

