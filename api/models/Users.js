/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  

  attributes: {

    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
 
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
     
    },
    nombre: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 60,
   
    },
    appellidos: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 120,
   
    },
    direccion: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 120,
   
    },
    codPostal: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 6,
   
    },
    telefono: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 9,
   
    },
    tipoDocumento: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 3,
   
    },
    numDocumento: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 9,
    },


  },


};

