"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(m,n){
var o=require('@stdlib/array-base-assert-is-complex128array/dist'),c=require('@stdlib/array-base-assert-is-complex64array/dist'),f=require('@stdlib/array-base-arraylike2object/dist'),v=require('@stdlib/strided-base-reinterpret-complex128/dist'),l=require('@stdlib/strided-base-reinterpret-complex64/dist');function a(e){var r;for(r=0;r<e.length;r++)if(e[r])return!0;return!1}function p(e){var r,i,t;for(r=e.data,i=e.accessors[0],t=0;t<r.length;t++)if(i(r,t))return!0;return!1}function q(e){var r=f(e);return r.accessorProtocol?o(e)?a(v(e,0)):c(e)?a(l(e,0)):p(r):a(e)}n.exports=q
});var y=u();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
