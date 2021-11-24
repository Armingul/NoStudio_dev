const listUsers = require("./list-users");

module.exports = {


  friendlyName: 'Add user',


  description: '',


  inputs: {
 
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
      viewTemplatePath: 'pages/user/createUser'
    }
  },


  fn: async function ({emailAddress,fullName,password},exits) {

    
    var find =await Users.findOne({

      emailAddress:emailAddress

    });
    sails.log(find);
    if(find){
      return exits.success({msg: "Ya existe un usuario con ese correo."});
    }else{
      var createUser=await Users.create({
        emailAddress:emailAddress,
        fullName:fullName,
        password:password,
      }).fetch();
  
      sails.log(createUser);
      // All done.
      return exits.success({msg: "Usuario creado"});
    }
    

    

  }


};

