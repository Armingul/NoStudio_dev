module.exports = {


    friendlyName: 'Update supplier',
  
  
    description: 'This action returns the view to update a supplier.',
  
  
    inputs: {
      id: {
        type: 'string',
        required: true,
        unique: true,
      },
      name: {
        type: 'string',
        required: true,
        description: 'Name of the product',
        maxLength: 100,
       
      },
      email: {
        type: 'string',
        required: true,
        description: 'Email of the supplier',
      },
  
      location: {
        type: 'string',
        required: true,
        description: 'Location of the supplier.',
        maxLength: 200,
     
      },
  
      category: {
        type: 'string',
        required: true,
        description: 'Category of the supplier',
        maxLength: 50,
      },
    },
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/suppliers/update-supplier'
      },
    },
  
  
    fn: async function (inputs,exits) {
  
  
      var supplier = inputs;
      
      // All done.
      return exits.success({supplier,msg:''});
  
    }
  
  
  };
  