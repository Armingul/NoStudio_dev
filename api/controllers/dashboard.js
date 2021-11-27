module.exports = {


  friendlyName: 'Dashboard',


  description: 'Dashboard something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/login/dashboard'
    },
  },


  fn: async function (inputs,exits) {

    // All done.
    return exits.success({});

  }


};
