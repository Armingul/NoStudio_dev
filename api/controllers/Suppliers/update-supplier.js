module.exports = {


  friendlyName: 'Modify supplier',


  description: 'This action modifies an existing supplier.',


  inputs: {
    id: {
      type: 'string',
      required: true,
      unique: true,
    },
    name: {
      type: 'string',
      required: true,
      description: 'Name of the product.',
      maxLength: 100,
     
    },
    email: {
      type: 'string',
      required: true,
      description: 'Email of the supplier.',
    },

    location: {
      type: 'string',
      required: true,
      description: 'Location of the supplier.',
      maxLength: 500,
   
    },

    category: {
      type: 'string',
      required: true,
      description: 'Category of the supplier.',
      maxLength: 50,
    },
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/suppliers/update-supplier'
    },
    notChange: {
      responseType: 'view',
      viewTemplatePath: 'pages/suppliers/update-supplier'
    },
    updateError: {
      responseType: 'view',
      viewTemplatePath: 'pages/suppliers/update-supplier'
    },
  },


  fn: async function (inputs, exits) {
    var supplier = inputs;
    // All done.

    var suppliersFound = await Suppliers.findOne({

      id: inputs.id
    });
    var string = JSON.stringify(suppliersFound);
    var json = JSON.parse(string);

    if (json.name === supplier.name && json.email === supplier.email && json.location === supplier.location && json.category === supplier.category) {
      return exits.notChange({ supplier, msg: "No se han modificado campos" });
    } else {
      var update = await Suppliers.updateOne({
        id: inputs.id,
      }).set({
        name: inputs.name,
        email: inputs.email,
        location: inputs.location,
        category: inputs.category,
      });

      if (update) {
        return exits.success({ supplier, msg: 'Proveedor actualizado' });
      } else {
        return exits.updateError({ supplier, msg: 'Ha habido un error al actualizar el proveedor' });
      }
    }
  }


};
