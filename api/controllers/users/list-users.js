

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
  
    var allUsers = await Users.find({
      
    });

    sails.log(inputs);
    this.req.body=allUsers;
    sails.log('SVF');
    var string=JSON.stringify(allUsers);
    var json=JSON.parse(string);
    var x = json[0].fullName;
    sails.log(json);
   
    return exits.success({json});
    

  }

};
