module.exports = {


  friendlyName: 'Modify product',


  description: 'This action modifies an existing product.',


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
    notChange: {
      responseType: 'view',
      viewTemplatePath: 'pages/products/update-product'
    },
    updateError: {
      responseType: 'view',
      viewTemplatePath: 'pages/products/update-product'
    },
  },


  fn: async function (inputs, exits) {
    var product = inputs;
    // All done.

    var productFound = await Products.findOne({

      id: inputs.id
    });
    var string = JSON.stringify(productFound);
    var json = JSON.parse(string);

    if (json.name === product.name && json.image === product.image && json.description === product.description && json.price === product.price && json.stock === product.stock
      && json.size === product.size) {
      return exits.notChange({ product, msg: "No se han modificado campos" });
    } else {
      var update = await Products.updateOne({
        id: inputs.id,
      }).set({
        name: inputs.name,
        image: inputs.image,
        description: inputs.description,
        price: inputs.price,
        stock: inputs.stock,
        size: inputs.size
      });

      if (update) {
        return exits.success({ product, msg: 'Producto actualizado' });
      } else {
        return exits.updateError({ product, msg: 'Ha habido un error al actualizar el producto' });
      }
    }
  }


};
