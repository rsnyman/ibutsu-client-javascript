# @IbutsuClient.ArtifactApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteArtifact**](ArtifactApi.md#deleteArtifact) | **DELETE** /artifact/{id} | Delete an artifact
[**downloadArtifact**](ArtifactApi.md#downloadArtifact) | **GET** /artifact/{id}/download | Download an artifact
[**getArtifact**](ArtifactApi.md#getArtifact) | **GET** /artifact/{id} | Get a single artifact
[**getArtifactList**](ArtifactApi.md#getArtifactList) | **GET** /artifact | Get a (filtered) list of artifacts
[**uploadArtifact**](ArtifactApi.md#uploadArtifact) | **POST** /artifact | Uploads a test run artifact
[**viewArtifact**](ArtifactApi.md#viewArtifact) | **GET** /artifact/{id}/view | Stream an artifact directly to the client/browser



## deleteArtifact

> deleteArtifact(id)

Delete an artifact

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ArtifactApi();
let id = "id_example"; // String | ID of artifact to delete
apiInstance.deleteArtifact(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of artifact to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadArtifact

> File downloadArtifact(id)

Download an artifact

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ArtifactApi();
let id = "id_example"; // String | ID of artifact to return
apiInstance.downloadArtifact(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of artifact to return | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, image/jpeg, image/png, image/gif, application/octet-stream


## getArtifact

> Artifact getArtifact(id)

Get a single artifact

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ArtifactApi();
let id = "id_example"; // String | ID of artifact to return
apiInstance.getArtifact(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of artifact to return | 

### Return type

[**Artifact**](Artifact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getArtifactList

> ArtifactList getArtifactList(opts)

Get a (filtered) list of artifacts

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ArtifactApi();
let opts = {
  'resultId': "resultId_example", // String | The result ID to filter by
  'page': 56, // Number | Set the page of items to return, defaults to 1
  'pageSize': 56 // Number | Set the number of items per page, defaults to 25
};
apiInstance.getArtifactList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resultId** | **String**| The result ID to filter by | [optional] 
 **page** | **Number**| Set the page of items to return, defaults to 1 | [optional] 
 **pageSize** | **Number**| Set the number of items per page, defaults to 25 | [optional] 

### Return type

[**ArtifactList**](ArtifactList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadArtifact

> Artifact uploadArtifact(resultId, filename, file, opts)

Uploads a test run artifact

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ArtifactApi();
let resultId = "resultId_example"; // String | ID of result to attach artifact to
let filename = "filename_example"; // String | ID of pet to update
let file = "/path/to/file"; // File | file to upload
let opts = {
  'additionalMetadata': null // Object | Additional data to pass to server
};
apiInstance.uploadArtifact(resultId, filename, file, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resultId** | **String**| ID of result to attach artifact to | 
 **filename** | **String**| ID of pet to update | 
 **file** | **File**| file to upload | 
 **additionalMetadata** | [**Object**](Object.md)| Additional data to pass to server | [optional] 

### Return type

[**Artifact**](Artifact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## viewArtifact

> File viewArtifact(id)

Stream an artifact directly to the client/browser

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ArtifactApi();
let id = "id_example"; // String | ID of artifact to return
apiInstance.viewArtifact(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of artifact to return | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, image/jpeg, image/png, image/gif, application/octet-stream

