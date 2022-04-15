
module.exports = {


  friendlyName: 'Create supply order',


  description: 'This action creates a new Supply Order entity from the data given by the administrator.',


  inputs: {
 
    idSupplier: {
      type: 'string',
      required: true,
      description: 'Id of the Supplier that the order was made from.',
      maxLength: 100,
     
    },
    materials: {
      type: 'string',
      required: true,
      description: 'All products in the Supply Order.',
    },

    status: {
      type: 'string',
      required: true,
      description: 'Status of the supply order.',
      maxLength: 200,
   
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/supply-orders/create-supply-order'
    },
  },


  fn: async function (inputs, exits) {

    var createSupplyOrder=await SupplyOrder.create({
      idSupplier:inputs.idSupplier,
      materials:inputs.materials,
      status:inputs.status,

    }).fetch();

    console.log(createSupplyOrder);



    // All done.
    if(createSupplyOrder){
      var allSuppliers = await Suppliers.find({});
      var string=JSON.stringify(allSuppliers);
      var suppliers=JSON.parse(string);
        return exits.success({suppliers, msg: "Pedido al proveedor creado."});   
    }else{
      return exits.errorCreate({suppliers, msg: "Error al crear el pedido al proveedor."});
    }

    }

};
