"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=o(function(h,n){
var s=require('@stdlib/array-base-assert-is-complex128array/dist'),f=require('@stdlib/array-base-assert-is-complex64array/dist'),c=require('@stdlib/array-base-arraylike2object/dist'),l=require('@stdlib/strided-base-reinterpret-complex128/dist'),v=require('@stdlib/strided-base-reinterpret-complex64/dist');function p(e){var r;for(r=0;r<e.length;r++)if(e[r])return!0;return!1}function i(e){var r;for(r=0;r<e.length;r+=2)if(e[r]||e[r+1])return!0;return!1}function q(e){var r,a,t;for(r=e.data,a=e.accessors[0],t=0;t<r.length;t++)if(a(r,t))return!0;return!1}function g(e){var r=c(e);return r.accessorProtocol?s(e)?i(l(e,0)):f(e)?i(v(e,0)):q(r):p(e)}n.exports=g
});var m=u();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
