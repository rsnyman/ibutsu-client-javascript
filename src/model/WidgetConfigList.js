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
import Pagination from './Pagination';
import WidgetConfig from './WidgetConfig';

/**
 * The WidgetConfigList model module.
 * @module model/WidgetConfigList
 * @version 0.1
 */
class WidgetConfigList {
    /**
     * Constructs a new <code>WidgetConfigList</code>.
     * @alias module:model/WidgetConfigList
     */
    constructor() { 
        
        WidgetConfigList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WidgetConfigList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WidgetConfigList} obj Optional instance to populate.
     * @return {module:model/WidgetConfigList} The populated <code>WidgetConfigList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WidgetConfigList();

            if (data.hasOwnProperty('widgets')) {
                obj['widgets'] = ApiClient.convertToType(data['widgets'], [WidgetConfig]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/WidgetConfig>} widgets
 */
WidgetConfigList.prototype['widgets'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
WidgetConfigList.prototype['pagination'] = undefined;






export default WidgetConfigList;
