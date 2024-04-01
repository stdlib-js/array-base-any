/*
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

import toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
import any = require( './index' );


// TESTS //

// The function returns a boolean...
{
	any( [ 1, 2, 3 ] ); // $ExpectType boolean
	any( new Float64Array( [ 1, 2, 3 ] ) ); // $ExpectType boolean
	any( new Float32Array( [ 1, 2, 3 ] ) ); // $ExpectType boolean
	any( new Int32Array( [ 1, 2, 3 ] ) ); // $ExpectType boolean
	any( new Int16Array( [ 1, 2, 3 ] ) ); // $ExpectType boolean
	any( new Int8Array( [ 1, 2, 3 ] ) ); // $ExpectType boolean
	any( new Uint32Array( [ 1, 2, 3 ] ) ); // $ExpectType boolean
	any( new Uint16Array( [ 1, 2, 3 ] ) ); // $ExpectType boolean
	any( new Uint8Array( [ 1, 2, 3 ] ) ); // $ExpectType boolean
	any( new Uint8ClampedArray( [ 1, 2, 3 ] ) ); // $ExpectType boolean
	any( toAccessorArray( [ 1, 2, 3 ] ) ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	any( 2 ); // $ExpectError
	any( false ); // $ExpectError
	any( true ); // $ExpectError
	any( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	any(); // $ExpectError
	any( [ 1, 2, 3 ], {}, 3 ); // $ExpectError
}
