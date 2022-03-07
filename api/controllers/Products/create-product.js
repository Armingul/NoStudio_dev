

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

    category: {
      type: 'string',
      required: true,
      description: 'Category of the product',
      maxLength: 50,
    },

    active: {
      type: 'boolean',
      default: true,
      description: 'Is the product active',
    },

    size: {
      type: 'json',
      description: 'Array of sizes of the product',
      columnType: "array",
    },

    stock: {
      type: 'json',
      description: 'Array of stock of the size of the product',
      columnType: "array",
    },


  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/products/create-product'
    },
  },


  fn: async function (inputs, exits) {

    var createProduct=await Products.create({
      name:inputs.name,
      image:inputs.image,
      description:inputs.description,
      price:inputs.price,
      category:inputs.category,
      active:true,

    }).fetch();

    if (inputs.stock == "") {
      inputs.stock = 0;
    } 

    var createProductSize = await ProductSize.create({
      idProduct: createProduct.id,
      size: inputs.size,
      stock: inputs.stock,

    }).fetch();

    console.log(createProduct);
    console.log(createProductSize);

    // All done.
    if(createProduct){
        return exits.success({msg: "Producto creado."});   
    }else{
      return exits.errorCreate({msg: "Error al crear el producto"});
    }

    }

};
