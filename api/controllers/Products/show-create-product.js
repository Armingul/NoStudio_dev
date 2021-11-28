module.exports = {


    friendlyName: 'Show create product',
  
  
    description: 'Returns the create product view',
  
  
    inputs: {
  
    },
  
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/products/create-product'
      }
    },
    
  
  
    fn: async function (inputs,exits) {
  
      // All done.
      var msg='';
      return exits.success({msg});
  
    }
  
  
  };
  