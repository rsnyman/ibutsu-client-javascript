# ibutsu.WidgetApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWidget**](WidgetApi.md#getWidget) | **GET** /widget/{id} | Generate data for a dashboard widget
[**getWidgetTypes**](WidgetApi.md#getWidgetTypes) | **GET** /widget/types | Get a list of widget types



## getWidget

> Object getWidget(id, opts)

Generate data for a dashboard widget

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.WidgetApi();
let id = "id_example"; // String | The widget identifier
let opts = {
  'params': null // Object | The parameters for the widget
};
apiInstance.getWidget(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The widget identifier | 
 **params** | [**Object**](.md)| The parameters for the widget | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWidgetTypes

> WidgetTypeList getWidgetTypes()

Get a list of widget types

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.WidgetApi();
apiInstance.getWidgetTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**WidgetTypeList**](WidgetTypeList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

