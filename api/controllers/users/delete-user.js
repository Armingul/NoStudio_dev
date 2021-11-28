module.exports = {


  friendlyName: 'Delete user',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true,
      unique: true,
    },
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/user/listUsers'
    },
  },


  fn: async function ({id},exits) {
    await Users.destroy({
      id:id
    });
    // All done.
    var allUsers = await Users.find({});
    var string=JSON.stringify(allUsers);
    var users=JSON.parse(string);
    return exits.success({users,msg:'User eliminado'});

  }


};
