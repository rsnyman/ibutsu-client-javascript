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
    instance = new @IbutsuClient.RunApi();
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

  describe('RunApi', function() {
    describe('addRun', function() {
      it('should call addRun successfully', function(done) {
        //uncomment below and update the code to test addRun
        //instance.addRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRun', function() {
      it('should call getRun successfully', function(done) {
        //uncomment below and update the code to test getRun
        //instance.getRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunList', function() {
      it('should call getRunList successfully', function(done) {
        //uncomment below and update the code to test getRunList
        //instance.getRunList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRun', function() {
      it('should call updateRun successfully', function(done) {
        //uncomment below and update the code to test updateRun
        //instance.updateRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));