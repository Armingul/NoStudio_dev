/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'String', required: true},
    image: {type: 'String', required: true},
    description: {type: 'String', required: true},
    price: {type: 'Number', required: true},
    brand: {type: 'String', required: true},
    active: {type: 'Boolean', required: true} 
  },

};

