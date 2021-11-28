module.exports = {


  friendlyName: 'Login',


  description: 'Login something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/login/login'
    },
  },


  fn: async function (inputs,exits) {

    
    return exits.success({msg: ""});
    
    
  }


};
