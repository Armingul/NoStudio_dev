/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  

  attributes: {

    email: {type: 'string', required: true},
    password: {type: 'string', required: true},
    name: { type: 'string', required: true },
    surnames: {type: 'string', required: true},
    address: {type: 'string', required: true},
    postalCode: {type: 'string', required: true},
    phoneNumber: {type: 'string', required: true},
    documentType: {type: 'string', required: true},
    documentNumber: {type: 'string', required: true},
    active: {type: 'boolean', required: true},
  }


};

