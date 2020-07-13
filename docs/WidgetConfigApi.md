# @IbutsuClient.WidgetConfigApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWidgetConfig**](WidgetConfigApi.md#addWidgetConfig) | **POST** /widget-config | Create a widget configuration
[**deleteWidgetConfig**](WidgetConfigApi.md#deleteWidgetConfig) | **DELETE** /widget-config/{id} | Delete a widget configuration
[**getWidgetConfig**](WidgetConfigApi.md#getWidgetConfig) | **GET** /widget-config/{id} | Get a single widget configuration
[**getWidgetConfigList**](WidgetConfigApi.md#getWidgetConfigList) | **GET** /widget-config | Get the list of widget configurations
[**updateWidgetConfig**](WidgetConfigApi.md#updateWidgetConfig) | **PUT** /widget-config/{id} | Updates a single widget configuration



## addWidgetConfig

> WidgetConfig addWidgetConfig(opts)

Create a widget configuration

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.WidgetConfigApi();
let opts = {
  'widgetConfig': new @IbutsuClient.WidgetConfig() // WidgetConfig | Widget configuration
};
apiInstance.addWidgetConfig(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **widgetConfig** | [**WidgetConfig**](WidgetConfig.md)| Widget configuration | [optional] 

### Return type

[**WidgetConfig**](WidgetConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWidgetConfig

> deleteWidgetConfig(id)

Delete a widget configuration

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.WidgetConfigApi();
let id = "id_example"; // String | ID of widget configuration to delete
apiInstance.deleteWidgetConfig(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of widget configuration to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWidgetConfig

> WidgetConfig getWidgetConfig(id)

Get a single widget configuration

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.WidgetConfigApi();
let id = "id_example"; // String | ID of widget config to return
apiInstance.getWidgetConfig(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of widget config to return | 

### Return type

[**WidgetConfig**](WidgetConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWidgetConfigList

> WidgetConfigList getWidgetConfigList(opts)

Get the list of widget configurations

A list of widget configurations

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.WidgetConfigApi();
let opts = {
  'filter': ["null"], // [String] | Fields to filter by
  'page': 56, // Number | Set the page of items to return, defaults to 1
  'pageSize': 56 // Number | Set the number of items per page, defaults to 25
};
apiInstance.getWidgetConfigList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**[String]**](String.md)| Fields to filter by | [optional] 
 **page** | **Number**| Set the page of items to return, defaults to 1 | [optional] 
 **pageSize** | **Number**| Set the number of items per page, defaults to 25 | [optional] 

### Return type

[**WidgetConfigList**](WidgetConfigList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWidgetConfig

> WidgetConfig updateWidgetConfig(id, opts)

Updates a single widget configuration

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.WidgetConfigApi();
let id = "id_example"; // String | ID of widget configuration to update
let opts = {
  'widgetConfig': new @IbutsuClient.WidgetConfig() // WidgetConfig | Widget configuration
};
apiInstance.updateWidgetConfig(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of widget configuration to update | 
 **widgetConfig** | [**WidgetConfig**](WidgetConfig.md)| Widget configuration | [optional] 

### Return type

[**WidgetConfig**](WidgetConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

