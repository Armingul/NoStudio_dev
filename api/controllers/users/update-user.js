module.exports = {


  friendlyName: 'Update user',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true,
      unique: true,
    },
    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    fullName: {
      type: 'string',
      required: true,
    },
   
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/updateUser'
    },
  },


  fn: async function ({id,emailAddress,fullName,password},exits) {


    sails.log();
    // All done.
    return exits.success({id,emailAddress,fullName,password});

  }


};
