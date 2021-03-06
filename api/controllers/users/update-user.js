module.exports = {


  friendlyName: 'Modify user',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true,
      unique: true,
    },
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
      description: 'Full representation of the user\'s name.',
      maxLength: 120,
   
    },
    address: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 120,
   
    },
    postalCode: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 6,
   
    },
    phoneNumber: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 9,
   
    },
    documentType: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 3,
   
    },
    documentNumber: {
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
 
    if(json.password===user.password && json.email===user.email && json.name===user.name && json.surnames===user.surnames && json.address===user.address
      && json.postalCode===user.postalCode && json.phoneNumber===user.phoneNumber && json.documentType===user.documentType && json.documentNumber === user.documentNumber){
      return exits.notChange({user,msg:"No se ha modificado campos"});
    }else{
      var update = await Users.updateOne({
        id:inputs.id,
      }).set({
        password:inputs.password,
        email:inputs.email,
        name:inputs.name,
        surnames:inputs.surnames,
        address:inputs.address,
        postalCode:inputs.postalCode,
        phoneNumber:inputs.phoneNumber,
        documentType:inputs.documentType,
        documentNumber:inputs.documentNumber
      });

      if(update){
        return exits.success({user,msg:'Usuario actualizado'});
      }else{
        return exits.updateError({user,msg:'Ha habido un error al actualizar el usuario'});
      }
    }
  }


};
