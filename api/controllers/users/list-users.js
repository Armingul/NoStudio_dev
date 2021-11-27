

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

   

    var json=JSON.parse(string);

    
    return exits.success({json,msg:''});
    

  }

};
