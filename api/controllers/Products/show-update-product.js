module.exports = {


    friendlyName: 'Update product',
  
  
    description: 'This action returns the view to update a product.',
  
  
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
          image: {
            type: 'string',
            required: true,
            description: 'Image (falta entender como hacerlo para no cargarlas en estático)',
          },
      
          description: {
            type: 'string',
            required: true,
            description: 'Description of the product.',
            maxLength: 200,
         
          },
      
          price: {
            type: 'number',
            required: true,
            description: 'Price of the product.',
          },
      
          stock: {
            type: 'number',
            required: true,
            description: 'Stock of the product.',   
          },
      
          size: {
            type: 'string',
            required: true,
            description: 'Size of the product.',
            maxLength: 30,   
          },
    },
  
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/products/update-product'
      },
    },
  
  
    fn: async function (inputs,exits) {
  
  
      var product = inputs;
      
      // All done.
      return exits.success({product,msg:''});
  
    }
  
  
  };
  