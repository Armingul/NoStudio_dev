module.exports = {


  friendlyName: 'Mostrar create user',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/createUser'
    }
  },
  


  fn: async function (inputs,exits) {

    // All done.
    var msg='';
    return exits.success({msg});

  }


};
