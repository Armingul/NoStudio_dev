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
        viewTemplatePath: 'pages/suppliers/list-suppliers'
      },
    },
  
  
    fn: async function ({id},exits) {
      await Suppliers.destroy({
        id:id
      });


      var allSuppliers = await Suppliers.find({});
      var string=JSON.stringify(allSuppliers);
      var suppliers=JSON.parse(string);
      return exits.success({suppliers,msg:'Proveedor eliminado'});
  
    }
  
  
  };
  