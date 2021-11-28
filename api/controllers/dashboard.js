module.exports = {


  friendlyName: 'Dashboard',


  description: 'Dashboard something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/dashboard'
    },
  },


  fn: async function (inputs,exits) {

    // All done.
    return exits.success({});

  }


};
