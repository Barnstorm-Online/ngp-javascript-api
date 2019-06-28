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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CodingAsActivism);
  }
}(this, function(expect, CodingAsActivism) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CodingAsActivism.CollectcanvassdataRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CollectcanvassdataRequest', function() {
    it('should create an instance of CollectcanvassdataRequest', function() {
      // uncomment below and update the code to test CollectcanvassdataRequest
      //var instance = new CodingAsActivism.CollectcanvassdataRequest();
      //expect(instance).to.be.a(CodingAsActivism.CollectcanvassdataRequest);
    });

    it('should have the property canvassContext (base name: "canvassContext")', function() {
      // uncomment below and update the code to test the property canvassContext
      //var instance = new CodingAsActivism.CollectcanvassdataRequest();
      //expect(instance).to.be();
    });

    it('should have the property responses (base name: "responses")', function() {
      // uncomment below and update the code to test the property responses
      //var instance = new CodingAsActivism.CollectcanvassdataRequest();
      //expect(instance).to.be();
    });

  });

}));
