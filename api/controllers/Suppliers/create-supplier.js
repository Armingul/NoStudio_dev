module.exports = {


  friendlyName: 'Create supplier',


  description: 'This action creates a new supplier entity from the data given by the administrator.',


  inputs: {
 
    name: {
      type: 'string',
      required: true,
      description: 'Name of the supplier',
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
      description: 'Category of the supplier.',
    },
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/suppliers/create-suppliers'
    },
  },


  fn: async function (inputs, exits) {

    var createSupplier=await Suppliers.create({
      name:inputs.name,
      email:inputs.email,
      location:inputs.location,
      category:inputs.category,

    }).fetch();

    console.log(createSupplier);

    // All done.
    if(createSupplier){
        return exits.success({msg: "Proveedor creado."});   
    }else{
      return exits.errorCreate({msg: "Error al crear el proveedor"});
    }

    }

};
