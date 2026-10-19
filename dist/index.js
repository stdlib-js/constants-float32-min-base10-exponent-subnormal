/** @license Apache-2.0 */

/* eslint-disable id-length */

'use strict';

/**
* The minimum base 10 exponent for a subnormal single-precision floating-point number.
*
* @module @stdlib/constants-float32-min-base10-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT32_MIN_BASE10_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float32-min-base10-exponent-subnormal' );
* // returns -45
*/


// MAIN //

/**
* The minimum base 10 exponent for a subnormal single-precision floating-point number.
*
* @constant
* @type {integer32}
* @default -45
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MIN_BASE10_EXPONENT_SUBNORMAL = -45|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT32_MIN_BASE10_EXPONENT_SUBNORMAL;
