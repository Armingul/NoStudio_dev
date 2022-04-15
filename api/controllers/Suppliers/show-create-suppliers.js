module.exports = {


    friendlyName: 'Show create supplier',
  
  
    description: 'Returns the create supplier view',
  
  
    inputs: {
  
    },
  
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/suppliers/create-suppliers'
      }
    },
    
  
  
    fn: async function (inputs,exits) {
  
      // All done.
      var msg='';
      return exits.success({msg});
  
    }
  
  
  };
  