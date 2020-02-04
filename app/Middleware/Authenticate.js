'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { Abort } = use('App/Helpers/HttpResponses')

class Authenticate {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request: req, response: res }, next) {
    const auth = req.header('Authorization');

    if (auth !== 'Bearer TEST')
      return Abort(res, 401, 'Not authorized!');


    // call next to advance the request
    await next()
  }
}

module.exports = Authenticate
