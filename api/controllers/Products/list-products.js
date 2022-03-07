module.exports = {

  friendlyName: 'List products',

  description: 'This action lists all the products currently in the Database',

  inputs: {

  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/products/list-products'
    }
  },

  fn: async function (inputs,exits) {
    
    var allProducts = await Products.find({});
    var string=JSON.stringify(allProducts);
    var products=JSON.parse(string);
    
    return exits.success({products,msg:''});

  }


};
