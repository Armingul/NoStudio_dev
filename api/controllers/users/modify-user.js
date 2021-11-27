module.exports = {


  friendlyName: 'Modify user',


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

    // All done.
    sails.log(id);
    sails.log(emailAddress);
    sails.log(fullName);
    sails.log(password);
    var user = await Users.findOne({

      id:id
    });
    var string=JSON.stringify(user);
    var json=JSON.parse(string);
    sails.log(json);
    if(json.fullName===fullName && json.emailAddress===emailAddress && json.password===password){
      return exits.success({id,emailAddress,fullName,password,msg:"No se ha modificado campos."});
    }else{
      var update = await Users.updateOne({
        id:id,
  
  
      }).set({
        emailAddress:emailAddress,
        fullName:fullName,
        password:password
      });
      sails.log(update);
      if(update){
        return exits.success({id,emailAddress,fullName,password,msg:'Usuario actualizado.'});
      }
    }
  }


};
