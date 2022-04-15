module.exports = {


  friendlyName: 'List Supply Orders',


  description: 'This action lists all the supply orders currently in the Database',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/supply-orders/list-supply-orders'
    }
  },


  fn: async function (inputs, exits) {

    var allSupplyOrders = await SupplyOrder.find({});
    var string = JSON.stringify(allSupplyOrders);
    var supplyOrders = JSON.parse(string);


    return exits.success({ supplyOrders, msg: '' });


  }


};
