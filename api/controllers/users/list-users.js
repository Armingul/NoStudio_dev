

module.exports = {


  friendlyName: 'List users',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/listUsers'
    }
  },


  fn: async function (inputs,exits) {
  
    var allUsers = await Users.find({});

    sails.log(allUsers);
  

    var string=JSON.stringify(allUsers);

    sails.log(allUsers);

    var json=JSON.parse(string);

    sails.log(json);
   
    return exits.success({json});
    

  }

};
