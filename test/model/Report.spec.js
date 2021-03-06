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
    factory(root.expect, root.ibutsu);
  }
}(this, function(expect, ibutsu) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ibutsu.Report();
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

  describe('Report', function() {
    it('should create an instance of Report', function() {
      // uncomment below and update the code to test Report
      //var instane = new ibutsu.Report();
      //expect(instance).to.be.a(ibutsu.Report);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ibutsu.Report();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instane = new ibutsu.Report();
      //expect(instance).to.be();
    });

    it('should have the property mimetype (base name: "mimetype")', function() {
      // uncomment below and update the code to test the property mimetype
      //var instane = new ibutsu.Report();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new ibutsu.Report();
      //expect(instance).to.be();
    });

    it('should have the property downloadUrl (base name: "download_url")', function() {
      // uncomment below and update the code to test the property downloadUrl
      //var instane = new ibutsu.Report();
      //expect(instance).to.be();
    });

    it('should have the property viewUrl (base name: "view_url")', function() {
      // uncomment below and update the code to test the property viewUrl
      //var instane = new ibutsu.Report();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instane = new ibutsu.Report();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ibutsu.Report();
      //expect(instance).to.be();
    });

  });

}));
