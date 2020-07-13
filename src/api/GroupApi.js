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


import ApiClient from "../ApiClient";
import Group from '../model/Group';
import GroupList from '../model/GroupList';

/**
* Group service.
* @module api/GroupApi
* @version 0.1
*/
export default class GroupApi {

    /**
    * Constructs a new GroupApi. 
    * @alias module:api/GroupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new group
     * @param {module:model/Group} group The group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Group} and HTTP response
     */
    addGroupWithHttpInfo(group) {
      let postBody = group;
      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling addGroup");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Group;
      return this.apiClient.callApi(
        '/group', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new group
     * @param {module:model/Group} group The group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Group}
     */
    addGroup(group) {
      return this.addGroupWithHttpInfo(group)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a group
     * @param {String} id The ID of the group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Group} and HTTP response
     */
    getGroupWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getGroup");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Group;
      return this.apiClient.callApi(
        '/group/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a group
     * @param {String} id The ID of the group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Group}
     */
    getGroup(id) {
      return this.getGroupWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Set the page of items to return, defaults to 1
     * @param {Number} opts.pageSize Set the number of items per page, defaults to 25
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupList} and HTTP response
     */
    getGroupListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupList;
      return this.apiClient.callApi(
        '/group', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Set the page of items to return, defaults to 1
     * @param {Number} opts.pageSize Set the number of items per page, defaults to 25
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupList}
     */
    getGroupList(opts) {
      return this.getGroupListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a group
     * @param {String} id The ID of the group
     * @param {module:model/Group} group The updated group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Group} and HTTP response
     */
    updateGroupWithHttpInfo(id, group) {
      let postBody = group;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateGroup");
      }
      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling updateGroup");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Group;
      return this.apiClient.callApi(
        '/group/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a group
     * @param {String} id The ID of the group
     * @param {module:model/Group} group The updated group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Group}
     */
    updateGroup(id, group) {
      return this.updateGroupWithHttpInfo(id, group)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
