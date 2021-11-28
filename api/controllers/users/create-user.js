

module.exports = {


  friendlyName: 'Add user',


  description: '',


  inputs: {
 
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
        password:inputs.password,
        email:inputs.email,
        nombre:inputs.nombre,
        appellidos:inputs.appellidos,
        direccion:inputs.direccion,
        codPostal:inputs.codPostal,
        telefono:inputs.telefono,
        tipoDocumento:inputs.tipoDocumento,
        numDocumento:inputs.numDocumento
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

