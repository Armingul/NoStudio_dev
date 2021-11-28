module.exports = {


  friendlyName: 'Modify user',


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
    notChange: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/updateUser'
    },
    updateError: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/updateUser'
    },
  },


  fn: async function (inputs,exits) {
    var user =inputs;
    // All done.

    var userFind = await Users.findOne({

      id:inputs.id
    });
    var string=JSON.stringify(userFind);
    var json=JSON.parse(string);
 
    if(json.password===user.password && json.email===user.email && json.nombre===user.nombre && json.appellidos===user.appellidos && json.direccion===user.direccion
      && json.codPostal===user.codPostal && json.telefono===user.telefono && json.telefono===user.telefono && json.numDocumento === user.numDocumento){
      return exits.notChange({user,msg:"No se ha modificado campos"});
    }else{
      var update = await Users.updateOne({
        id:inputs.id,
      }).set({
        password:inputs.password,
        email:inputs.email,
        nombre:inputs.nombre,
        appellidos:inputs.appellidos,
        direccion:inputs.direccion,
        codPostal:inputs.codPostal,
        telefono:inputs.telefono,
        tipoDocumento:inputs.tipoDocumento,
        numDocumento:inputs.numDocumento
      });

      if(update){
        return exits.success({user,msg:'Usuario actualizado'});
      }else{
        return exits.updateError({user,msg:'Ha habido un error al actualizar el usuario'});
      }
    }
  }


};
