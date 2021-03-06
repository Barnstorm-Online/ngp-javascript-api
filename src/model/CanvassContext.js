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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CodingAsActivism) {
      root.CodingAsActivism = {};
    }
    root.CodingAsActivism.CanvassContext = factory(root.CodingAsActivism.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CanvassContext model module.
   * @module model/CanvassContext
   * @version 1.0
   */

  /**
   * Constructs a new <code>CanvassContext</code>.
   * @alias module:model/CanvassContext
   * @class
   * @param contactTypeId {Number} 
   * @param dateCanvassed {String} 
   * @param inputTypeId {Number} 
   */
  var exports = function(contactTypeId, dateCanvassed, inputTypeId) {
    var _this = this;

    _this['contactTypeId'] = contactTypeId;
    _this['dateCanvassed'] = dateCanvassed;
    _this['inputTypeId'] = inputTypeId;
  };

  /**
   * Constructs a <code>CanvassContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CanvassContext} obj Optional instance to populate.
   * @return {module:model/CanvassContext} The populated <code>CanvassContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contactTypeId')) {
        obj['contactTypeId'] = ApiClient.convertToType(data['contactTypeId'], 'Number');
      }
      if (data.hasOwnProperty('dateCanvassed')) {
        obj['dateCanvassed'] = ApiClient.convertToType(data['dateCanvassed'], 'String');
      }
      if (data.hasOwnProperty('inputTypeId')) {
        obj['inputTypeId'] = ApiClient.convertToType(data['inputTypeId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} contactTypeId
   */
  exports.prototype['contactTypeId'] = undefined;
  /**
   * @member {String} dateCanvassed
   */
  exports.prototype['dateCanvassed'] = undefined;
  /**
   * @member {Number} inputTypeId
   */
  exports.prototype['inputTypeId'] = undefined;



  return exports;
}));


