
module.exports = {


  friendlyName: 'Login',


  description: 'Login login.',

  inputs: {
 
    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
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
      viewTemplatePath: 'pages/login/dashboard'
    },
    errorLogin:{
      responseType: 'view',
      viewTemplatePath: 'pages/homepage'
    }
  },


  fn: async function ({emailAddress,password},exits) {

    
    sails.log(emailAddress);
    sails.log(password);
    
    
    var find =await Admin.findOne({

      emailAddress:emailAddress,
      password:password

    });
    sails.log(find);
    if(find){
      return exits.success({msg:""});
    }else{
      return exits.errorLogin({msg: "Login incorrecto"});
    } 
    
    
  }


};
