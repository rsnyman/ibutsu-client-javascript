/**
 * Ibutsu API
 * A system to store and query test results
 *
 * The version of the OpenAPI document: 1.9.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.@IbutsuClient);
  }
}(this, function(expect, @IbutsuClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @IbutsuClient.Pagination();
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

  describe('Pagination', function() {
    it('should create an instance of Pagination', function() {
      // uncomment below and update the code to test Pagination
      //var instane = new @IbutsuClient.Pagination();
      //expect(instance).to.be.a(@IbutsuClient.Pagination);
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instane = new @IbutsuClient.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instane = new @IbutsuClient.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "totalPages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instane = new @IbutsuClient.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property totalItems (base name: "totalItems")', function() {
      // uncomment below and update the code to test the property totalItems
      //var instane = new @IbutsuClient.Pagination();
      //expect(instance).to.be();
    });

  });

}));