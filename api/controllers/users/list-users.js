

module.exports = {


  friendlyName: 'List users',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/listUsers'
    },
  },


  fn: async function () {
    var id=1;
    var allUsers = await Users.find({
      select: ['emailAddress', 'fullName']
    });
    this.req.me=allUsers;
    sails.log(this.req.me);
    sails.log('SVF');
    

  }

};
