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
    root.CodingAsActivism.Location = factory(root.CodingAsActivism.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Location model module.
   * @module model/Location
   * @version 1.0
   */

  /**
   * Constructs a new <code>Location</code>.
   * @alias module:model/Location
   * @class
   * @param locationId {Number} 
   */
  var exports = function(locationId) {
    var _this = this;

    _this['locationId'] = locationId;
  };

  /**
   * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location} obj Optional instance to populate.
   * @return {module:model/Location} The populated <code>Location</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('locationId')) {
        obj['locationId'] = ApiClient.convertToType(data['locationId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} locationId
   */
  exports.prototype['locationId'] = undefined;



  return exports;
}));

