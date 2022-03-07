module.exports = {


    friendlyName: 'Delete product',
  
  
    description: 'This action deletes a product from the database and renders the list-products view.',
  
  
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
        viewTemplatePath: 'pages/products/list-products'
      },
    },
  
  
    fn: async function ({id},exits) {
      await Products.destroy({
        id:id
      });

      await ProductSize.destroy({
        idProduct:id
      });
      // All done.


      var allProducts = await Products.find({});
      var string=JSON.stringify(allProducts);
      var products=JSON.parse(string);
      return exits.success({products,msg:'Producto eliminado'});
  
    }
  
  
  };
  