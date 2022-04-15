module.exports = {


  friendlyName: 'Update status',


  description: "This action updates the selected supply order's status",


  inputs: {
    id: {
      type: 'string',
      required: true,
      unique: true,
    },

    status: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/supply-orders/list-supply-orders'
    },
    notChange: {
      responseType: 'view',
      viewTemplatePath: 'pages/supply-orders/list-supply-orders'
    },
    updateError: {
      responseType: 'view',
      viewTemplatePath: 'pages/supply-orders/list-supply-orders'
    },
  },


  fn: async function (inputs, exits) {

    var supplyOrder = inputs;

    var supplyOrderFound = await SupplyOrder.findOne({
      id: inputs.id
    });

    var string = JSON.stringify(supplyOrderFound);
    var json = JSON.parse(string);

    var allSupplyOrders = await SupplyOrder.find({});
    var string=JSON.stringify(allSupplyOrders);
    var supplyOrders=JSON.parse(string);

    if (json.status == supplyOrder.status) {
      return exits.notChange({ supplyOrders, msg: "No se han modificado campos" });
    } else {
      var update = await SupplyOrder.updateOne({
        id: inputs.id,
      }).set({
        status: inputs.status
      });
    }

    if (update) {
    var allSupplyOrders = await SupplyOrder.find({});
    var string=JSON.stringify(allSupplyOrders);
    var supplyOrders=JSON.parse(string);
      return exits.success({ supplyOrders, msg: 'Pedido al proveedor actualizado' });
    } else {
      return exits.updateError({ supplyOrders, msg: 'Ha habido un error al actualizar el order' });
    }

  }


};
