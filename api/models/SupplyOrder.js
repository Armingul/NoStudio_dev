/**
 * SupplyOrders.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idSupplier: { type: 'String', required: true},
    materials: { type: 'String', required: true},
    status: { type: 'String', required: true},
  },

};

