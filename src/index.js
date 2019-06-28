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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CanvassContext', 'model/CollectcanvassdataRequest', 'model/CreateavolunteerrecordRequest', 'model/Email', 'model/Event', 'model/HelloworldRequest', 'model/Location', 'model/Person', 'model/RSVPtoaneventRequest', 'model/Response', 'model/Role', 'model/Shift', 'model/Status', 'api/MiscApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CanvassContext'), require('./model/CollectcanvassdataRequest'), require('./model/CreateavolunteerrecordRequest'), require('./model/Email'), require('./model/Event'), require('./model/HelloworldRequest'), require('./model/Location'), require('./model/Person'), require('./model/RSVPtoaneventRequest'), require('./model/Response'), require('./model/Role'), require('./model/Shift'), require('./model/Status'), require('./api/MiscApi'));
  }
}(function(ApiClient, CanvassContext, CollectcanvassdataRequest, CreateavolunteerrecordRequest, Email, Event, HelloworldRequest, Location, Person, RSVPtoaneventRequest, Response, Role, Shift, Status, MiscApi) {
  'use strict';

  /**
   * TODO_Add_Description.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CodingAsActivism = require('index'); // See note below*.
   * var xxxSvc = new CodingAsActivism.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CodingAsActivism.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CodingAsActivism.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CodingAsActivism.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CanvassContext model constructor.
     * @property {module:model/CanvassContext}
     */
    CanvassContext: CanvassContext,
    /**
     * The CollectcanvassdataRequest model constructor.
     * @property {module:model/CollectcanvassdataRequest}
     */
    CollectcanvassdataRequest: CollectcanvassdataRequest,
    /**
     * The CreateavolunteerrecordRequest model constructor.
     * @property {module:model/CreateavolunteerrecordRequest}
     */
    CreateavolunteerrecordRequest: CreateavolunteerrecordRequest,
    /**
     * The Email model constructor.
     * @property {module:model/Email}
     */
    Email: Email,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The HelloworldRequest model constructor.
     * @property {module:model/HelloworldRequest}
     */
    HelloworldRequest: HelloworldRequest,
    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location: Location,
    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person: Person,
    /**
     * The RSVPtoaneventRequest model constructor.
     * @property {module:model/RSVPtoaneventRequest}
     */
    RSVPtoaneventRequest: RSVPtoaneventRequest,
    /**
     * The Response model constructor.
     * @property {module:model/Response}
     */
    Response: Response,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The Shift model constructor.
     * @property {module:model/Shift}
     */
    Shift: Shift,
    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status: Status,
    /**
     * The MiscApi service constructor.
     * @property {module:api/MiscApi}
     */
    MiscApi: MiscApi
  };

  return exports;
}));