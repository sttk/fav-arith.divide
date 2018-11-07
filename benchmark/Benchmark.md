## Benchmark test of @fav/arith.divide

> Comparing with [fraction.js](https://www.npmjs.com/package/fraction.js)

### v0.1.1

|             | @fav/arith.divide(0.1.1) | fraction.js(4.0.10) |
|:------------|-------------------------:|--------------------:|
| 0/1         |       29,321,109 ops/sec |  11,201,065 ops/sec |
| Integers    |       31,338,184 ops/sec |  11,841,080 ops/sec |
| Decimals    |       32,288,332 ops/sec |  11,803,014 ops/sec |
| Fractions   |       32,099,941 ops/sec |  12,002,111 ops/sec |
| Fractions   |       32,165,235 ops/sec |  12,154,404 ops/sec |
| Big Numbers |        5,778,833 ops/sec |  11,027,576 ops/sec |

- Platform: Node.js 10.8.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB

