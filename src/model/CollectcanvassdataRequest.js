/**
 * Coding as activism
 * TODO: Add Description
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CanvassContext', 'model/Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CanvassContext'), require('./Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CodingAsActivism) {
      root.CodingAsActivism = {};
    }
    root.CodingAsActivism.CollectcanvassdataRequest = factory(root.CodingAsActivism.ApiClient, root.CodingAsActivism.CanvassContext, root.CodingAsActivism.Response);
  }
}(this, function(ApiClient, CanvassContext, Response) {
  'use strict';




  /**
   * The CollectcanvassdataRequest model module.
   * @module model/CollectcanvassdataRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>CollectcanvassdataRequest</code>.
   * @alias module:model/CollectcanvassdataRequest
   * @class
   * @param canvassContext {module:model/CanvassContext} 
   * @param responses {Array.<module:model/Response>} 
   */
  var exports = function(canvassContext, responses) {
    var _this = this;

    _this['canvassContext'] = canvassContext;
    _this['responses'] = responses;
  };

  /**
   * Constructs a <code>CollectcanvassdataRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CollectcanvassdataRequest} obj Optional instance to populate.
   * @return {module:model/CollectcanvassdataRequest} The populated <code>CollectcanvassdataRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canvassContext')) {
        obj['canvassContext'] = CanvassContext.constructFromObject(data['canvassContext']);
      }
      if (data.hasOwnProperty('responses')) {
        obj['responses'] = ApiClient.convertToType(data['responses'], [Response]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CanvassContext} canvassContext
   */
  exports.prototype['canvassContext'] = undefined;
  /**
   * @member {Array.<module:model/Response>} responses
   */
  exports.prototype['responses'] = undefined;



  return exports;
}));


