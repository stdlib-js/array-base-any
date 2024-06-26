/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isComplex128Array = require( '@stdlib/array-base-assert-is-complex128array' );
var isComplex64Array = require( '@stdlib/array-base-assert-is-complex64array' );
var isBooleanArray = require( '@stdlib/array-base-assert-is-booleanarray' );
var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var reinterpret128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var reinterpret64 = require( '@stdlib/strided-base-reinterpret-complex64' );
var reinterpretBoolean = require( '@stdlib/strided-base-reinterpret-boolean' );


// FUNCTIONS //

/**
* Tests whether at least one element in an array is truthy.
*
* @private
* @param {Collection} x - input array
* @returns {boolean} boolean indicating whether at least one element is truthy
*
* @example
* var x = [ 0, 0, 1, 0 ];
*
* var out = internal( x );
* // returns true
*
* @example
* var x = [ 0, 0, 0, 0 ];
*
* var out = internal( x );
* // returns false
*/
function internal( x ) {
	var i;
	for ( i = 0; i < x.length; i++ ) {
		if ( x[ i ] ) {
			return true;
		}
	}
	return false;
}

/**
* Tests whether at least one element in an array is truthy.
*
* @private
* @param {Object} x - input array object
* @returns {boolean} boolean indicating whether at least one element is truthy
*
* @example
* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 0, 0, 1, 0 ] ) );
*
* var out = accessors( x );
* // returns true
*
* @example
* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 0, 0, 0, 0 ] ) );
*
* var out = accessors( x );
* // returns false
*/
function accessors( x ) {
	var data;
	var get;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];

	for ( i = 0; i < data.length; i++ ) {
		if ( get( data, i ) ) {
			return true;
		}
	}
	return false;
}


// MAIN //

/**
* Tests whether at least one element in an array is truthy.
*
* @param {Collection} x - input array
* @returns {boolean} boolean indicating whether at least one element is truthy
*
* @example
* var x = [ 0, 0, 1, 0 ];
*
* var out = any( x );
* // returns true
*
* @example
* var x = [ 0, 0, 0, 0 ];
*
* var out = any( x );
* // returns false
*/
function any( x ) {
	var obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		// If provided a complex number array, reinterpret as a real typed array and test interleaved real and imaginary components, where we consider a complex number to be truthy if at least one component is non-zero...
		if ( isComplex128Array( x ) ) {
			return internal( reinterpret128( x, 0 ) );
		}
		if ( isComplex64Array( x ) ) {
			return internal( reinterpret64( x, 0 ) );
		}
		// If provided a boolean array, reinterpret as typed array and test for truthiness...
		if ( isBooleanArray( x ) ) {
			return internal( reinterpretBoolean( x, 0 ) );
		}
		return accessors( obj );
	}
	return internal( x );
}


// EXPORTS //

module.exports = any;
