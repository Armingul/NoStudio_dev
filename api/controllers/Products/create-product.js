module.exports = {


  friendlyName: 'Create product',


  description: 'This action creates a new Product entity from the data given by the administrator.',


  inputs: {
 
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

    brand: {
      type: 'string',
      required: true,
      description: 'Brand of the product',
      maxLength: 50,
    },

    active: {
      type: 'boolean',
      default: true,
      description: 'Is the product active',
    },
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/products/create-product'
    }
  },


  fn: async function (inputs, exits) {

    var createProduct=await Products.create({
      name:inputs.name,
      image:inputs.image,
      description:inputs.description,
      price:inputs.price,
      brand:inputs.brand,
      active:true,

    }).fetch();

    sails.log(createProduct);

    

    // All done.
    if(createProduct){
      return exits.success({msg: "Producto creado"});
    }else{
      return exits.errorCreate({msg: "Error al crear el producto"});
    }

    }

};
