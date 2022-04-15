/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/


  /* MISC */
  'GET /dashboard': { action: 'dashboard' },
  'POST /login': { action: 'Login/login' },
  '/': { action: 'homepage' },

  /* USERS */
  '/': { action: 'login' },
  'GET /users/listUsers': { action: 'users/list-users' },
  'POST /users/add': { action: 'users/create-user' },
  'POST /users/update': { action: 'users/show-update-user' },
  'POST /users/modifyUser': { action: 'users/update-user' },
  'POST /users/delete': { action: 'users/delete-user' },
  'GET /users/showAdd': { action: 'users/show-create-user' },


  /* PRODUCTS */
  'GET /products/list-products': { action: 'products/list-products' },
  'GET /products/show-create-product': { action: 'products/show-create-product' },
  'POST /products/add': { action: 'products/create-product' },
  'POST /products/update': { action: 'products/show-update-product' },
  'POST /products/update-product': { action: 'products/update-product' },
  'POST /products/delete': { action: 'products/delete-product' },

  /* ORDERS */
  'GET /orders/list-orders': { action: 'orders/list-orders' },
  'POST /orders/updateStatus': { action: 'orders/update-status' },

  /* SUPPLIERS */

  'GET /suppliers/list-suppliers': { action: 'suppliers/list-suppliers' },
  'GET /suppliers/show-create-suppliers': { action: 'suppliers/show-create-suppliers' },
  'POST /suppliers/add': { action: 'suppliers/create-supplier' },
  'POST /suppliers/update': { action: 'suppliers/show-update-supplier' },
  'POST /suppliers/update-supplier': { action: 'suppliers/update-supplier' },
  'POST /suppliers/delete': { action: 'suppliers/delete-supplier' },

    /* SUPPLY ORDERS */
    'GET /supply-orders/list-supply-orders': { action: 'supplyOrders/list-supply-orders' },
    'GET /supply-orders/show-create-supply-order': { action: 'supplyOrders/show-create-supply-order' },
    'POST /supply-orders/add': { action: 'supplyOrders/create-supply-order' },
    'POST /supply-orders/updateStatus': { action: 'supplyOrders/update-status' },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
