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

import ApiClient from '../ApiClient';

/**
 * The ReportParameters model module.
 * @module model/ReportParameters
 * @version 0.1
 */
class ReportParameters {
    /**
     * Constructs a new <code>ReportParameters</code>.
     * @alias module:model/ReportParameters
     */
    constructor() { 
        
        ReportParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportParameters} obj Optional instance to populate.
     * @return {module:model/ReportParameters} The populated <code>ReportParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportParameters();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of report to generate
 * @member {String} type
 */
ReportParameters.prototype['type'] = undefined;

/**
 * A regular expression to filter test results by
 * @member {String} filter
 */
ReportParameters.prototype['filter'] = undefined;

/**
 * The source of the test results
 * @member {String} source
 */
ReportParameters.prototype['source'] = undefined;






export default ReportParameters;

