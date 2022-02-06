

module.exports = {


  friendlyName: 'Add user',


  description: '',


  inputs: {

    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
    },
 
    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
 
    },

    name: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 60,
   
    },
    surnames: {
      type: 'string',
      required: true,
      description: 'User\'s surnames.',
      maxLength: 100,
   
    },
  
    address: {
      type: 'string',
      required: true,
      description: 'User\'s address. ',
      maxLength: 120,
   
    },
    postalCode: {
      type: 'string',
      required: true,
      description: 'User\'s postal code.',
      maxLength: 6,
   
    },
    phoneNumber: {
      type: 'number',
      required: true,
      description: 'User\'s phone number.',
   
    },
    documentType: {
      type: 'string',
      required: true,
      description: 'User\'s document type',
      maxLength: 3,
   
    },
    documentNumber: {
      type: 'string',
      required: true,
      description: 'User\'s document number.',
      maxLength: 9,
    },


  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/createUser'
    },
    errorCreate: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/createUser'
    },
  },


  fn: async function (inputs,exits) {

    
    var find =await Users.findOne({

      email:inputs.email

    });
 
    if(find){
      return exits.success({msg: "Ya existe un usuario con ese correo."});
    }else{
      var createUser=await Users.create({    
        email:inputs.email,
        password:inputs.password,
        name:inputs.name,
        surnames:inputs.surnames,
        address:inputs.address,
        postalCode:inputs.postalCode,
        phoneNumber:inputs.phoneNumber,
        documentType:inputs.documentType,
        documentNumber:inputs.documentNumber,
        active: true
      }).fetch();
  
    
      // All done.
      if(createUser){
        return exits.success({msg: "Usuario creado"});
      }else{
        return exits.errorCreate({msg: "Error al crear usuario"});
      }
      
    }
  }


};

