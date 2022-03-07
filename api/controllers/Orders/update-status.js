module.exports = {


  friendlyName: 'Update status',


  description: "This action updates the selected order's status",


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
      viewTemplatePath: 'pages/orders/list-orders'
    },
    notChange: {
      responseType: 'view',
      viewTemplatePath: 'pages/orders/list-orders'
    },
    updateError: {
      responseType: 'view',
      viewTemplatePath: 'pages/orders/list-orders'
    },
  },


  fn: async function (inputs, exits) {

    var order = inputs;

    var orderFound = await Orders.findOne({
      id: inputs.id
    });

    var string = JSON.stringify(orderFound);
    var json = JSON.parse(string);

    var allOrders = await Orders.find({});
    var string=JSON.stringify(allOrders);
    var orders=JSON.parse(string);

    if (json.status == order.status) {
      return exits.notChange({ orders, msg: "No se han modificado campos" });
    } else {
      var update = await Orders.updateOne({
        id: inputs.id,
      }).set({
        status: inputs.status
      });
    }

    if (update) {
    var allOrders = await Orders.find({});
    var string=JSON.stringify(allOrders);
    var orders=JSON.parse(string);
      return exits.success({ orders, msg: 'Order actualizado' });
    } else {
      return exits.updateError({ orders, msg: 'Ha habido un error al actualizar el order' });
    }

  }


};
