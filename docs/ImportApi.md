# ibutsu.ImportApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addImport**](ImportApi.md#addImport) | **POST** /import | Import a file into Ibutsu. This can be either a JUnit XML file, or an Ibutsu archive
[**getImport**](ImportApi.md#getImport) | **GET** /import/{id} | Get the status of an import



## addImport

> ModelImport addImport(importFile)

Import a file into Ibutsu. This can be either a JUnit XML file, or an Ibutsu archive

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ImportApi();
let importFile = "/path/to/file"; // File | The file to import
apiInstance.addImport(importFile).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importFile** | **File**| The file to import | 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getImport

> ModelImport getImport(id)

Get the status of an import

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ImportApi();
let id = "id_example"; // String | The ID of the import
apiInstance.getImport(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the import | 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

