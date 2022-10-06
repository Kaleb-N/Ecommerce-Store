import createSchema from 'part:@sanity/base/schema-creator'; // schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type'; // schema types

import product from './product';
import banner from './banner';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner]),
})
