

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
    var string=JSON.stringify(allUsers);
    var users=JSON.parse(string);

    
    return exits.success({users,msg:''});
    

  }

};
