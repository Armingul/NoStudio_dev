module.exports = {


  friendlyName: 'List orders',


  description: 'This action lists all the orders currently in the Database',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/orders/list-orders'
    }
  },


  fn: async function (inputs, exits) {

    var allOrders = await Orders.find({});
    var string = JSON.stringify(allOrders);
    var orders = JSON.parse(string);


    return exits.success({ orders, msg: '' });


  }


};
