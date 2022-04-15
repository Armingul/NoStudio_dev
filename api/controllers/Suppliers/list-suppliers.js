module.exports = {

  friendlyName: 'List suppliers',

  description: 'This action lists all the suppliers currently in the Database',

  inputs: {

  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/suppliers/list-suppliers'
    }
  },

  fn: async function (inputs,exits) {
    
    var allSuppliers = await Suppliers.find({});
    var string=JSON.stringify(allSuppliers);
    var suppliers=JSON.parse(string);
    
    return exits.success({suppliers,msg:''});

  }


};
