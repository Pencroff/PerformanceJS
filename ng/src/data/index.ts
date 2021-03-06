/**
 * Created by Sergey Daniloff on 03.06.2017.
 */

export default [{
  id: 'DFD11651-3FB9-40A9-A233-C7BA15D1620F',
  name: 'array cloning',
  description: 'Performance case for copy array elements. Most of the cases is just shallow copy, except JSON manipulation and lodash deep clone. Array contains number literals. Expected similar behavior with string literals. <a href="https://goo.gl/J60aIa" target="_blank">StackOverflow question</a>',
  tags: ['array', 'cloning', 'basic'],
  url: 'tests/array-copy.js'
}, {
  id: '2DDD96CD-1F90-4792-9CE8-D6CA07CFC248',
  name: 'array iteration',
  description: 'Performance case for iteration array elements.Comparison for StackOverflow question: What is the fastest way to loop through an array in JavaScript? (<a href="https://goo.gl/VxozLR" target="_blank">link</a>)',
  tags: ['array', 'iteration', 'basic'],
  url: 'tests/array-iteration.js'
}, {
  id: '9D6E020A-D9BF-4E33-B1FC-2B6C79AFFF70',
  name: 'converting number to string',
  description: 'Performance case for converting number to string',
  tags: ['number', 'string', 'converting', 'basic'],
  url: 'tests/number-to-string.js'
}, {
  id: '384A61CA-DA2E-4FD2-A113-080010D4A42B',
  name: 'object literal iteration',
  description: 'Performance case for iteration object properties. Comparison for StackOverflow question: How do I loop through or enumerate a JavaScript object? (<a href="https://goo.gl/0QEGHB" target="_blank">link</a>)',
  tags: ['object', 'iteration', 'basic'],
  url: 'tests/object-iteration.js'
}, {
  id: 'F33A9807-6D63-4773-AF70-7DA57E79A90C',
  name: 'string concatenation',
  description: 'Performance case for string concatenation',
  tags: ['string', 'concatenation', 'basic'],
  url: 'tests/string-concatenation.js'
}, {
  id: '2F731CB4-1931-49BA-A60E-5712CAD904F1',
  name: 'converting string to number',
  description: 'Performance case for converting string to number',
  tags: ['string', 'number', 'converting', 'basic'],
  url: 'tests/string-to-number.js'
}, {
  id: 'C3441282-DA60-4E49-BD5D-76ACA43F92C3',
  name: 'key gen azure table',
  description: 'Key gen function for azure table (<a href="https://www.npmjs.com/package/winston-azure-sw" target="_blank">link</a>)',
  tags: ['string', 'id gen'],
  url: 'tests/key-gen-azure-table.js'
}];
