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
      viewTemplatePath: 'pages/products/create-product'
    }
  },


  fn: async function (inputs, exits) {

    var createProduct=await Products.create({
      name:inputs.name,
      image:inputs.image,
      description:inputs.description,
      price:inputs.price,
      stock:inputs.stock,
      size:inputs.size,
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
