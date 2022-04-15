module.exports = {


    friendlyName: 'Show create supply order',
  
  
    description: 'Returns the create supply order view',
  
  
    inputs: {
  
    },
  
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/supply-orders/create-supply-order'
      }
    },
    
  
  
    fn: async function (inputs,exits) {

    var allSuppliers = await Suppliers.find({});
    var string=JSON.stringify(allSuppliers);
    var suppliers=JSON.parse(string);
    
    return exits.success({suppliers,msg:''});
    
    }
  
  
  };
  