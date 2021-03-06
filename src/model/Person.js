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
    root.CodingAsActivism.Person = factory(root.CodingAsActivism.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Person model module.
   * @module model/Person
   * @version 1.0
   */

  /**
   * Constructs a new <code>Person</code>.
   * @alias module:model/Person
   * @class
   * @param vanId {Number} 
   */
  var exports = function(vanId) {
    var _this = this;

    _this['vanId'] = vanId;
  };

  /**
   * Constructs a <code>Person</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Person} obj Optional instance to populate.
   * @return {module:model/Person} The populated <code>Person</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('vanId')) {
        obj['vanId'] = ApiClient.convertToType(data['vanId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} vanId
   */
  exports.prototype['vanId'] = undefined;



  return exports;
}));


