/**
 * Suppliers.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'String', required: true},
    email: { type: 'String', required: true},
    location: { type: 'String', required: true},
    category: { type: 'String', required: true},
  },

};

