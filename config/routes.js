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

  '/': { action: 'homepage' },
  'GET /users/listUsers': { action: 'users/list-users' },
  'POST /users/add': { action: 'users/create-user' },
  'POST /users/update': { action: 'users/update-user' },
  'POST /users/modifyUser': { action: 'users/modify-user' },
  'POST /users/delete': { action: 'users/delete-user' },
  'GET /products/list-products': { action: 'products/list-products' },
  'GET /users/showAdd': { action: 'users/mostrar-create-user' },
  'GET /dashboard': { action: 'dashboard' },
  'POST /login': { action: 'Login/login' },


  


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
