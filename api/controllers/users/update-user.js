
module.exports = {


  friendlyName: 'Update user',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true,
      unique: true,
    },
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


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/updateUser'
    },
  },


  fn: async function (inputs,exits) {


    var user = inputs;
    
    // All done.
    return exits.success({user,msg:''});

  }


};
