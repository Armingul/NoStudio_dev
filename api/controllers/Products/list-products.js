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
  
    var allProducts = await Products.find({
      
    });

    sails.log(inputs);
    var string=JSON.stringify(allProducts);
    var json=JSON.parse(string);
    console.log(json);
   
    return exits.success({json});
    

  }


};
