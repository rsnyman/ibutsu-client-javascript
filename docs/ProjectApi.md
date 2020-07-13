# @IbutsuClient.ProjectApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProject**](ProjectApi.md#addProject) | **POST** /project | Create a project
[**getProject**](ProjectApi.md#getProject) | **GET** /project/{id} | Get a single project by ID
[**getProjectList**](ProjectApi.md#getProjectList) | **GET** /project | Get a list of projects
[**updateProject**](ProjectApi.md#updateProject) | **PUT** /project/{id} | Update a project



## addProject

> Project addProject(project)

Create a project

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ProjectApi();
let project = new @IbutsuClient.Project(); // Project | Project
apiInstance.addProject(project).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**Project**](Project.md)| Project | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProject

> Project getProject(id)

Get a single project by ID

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ProjectApi();
let id = "id_example"; // String | ID of test project
apiInstance.getProject(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of test project | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectList

> ProjectList getProjectList(opts)

Get a list of projects

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ProjectApi();
let opts = {
  'ownerId': "ownerId_example", // String | Filter projects by owner ID
  'groupId': "groupId_example", // String | Filter projects by group ID
  'page': 56, // Number | Set the page of items to return, defaults to 1
  'pageSize': 56 // Number | Set the number of items per page, defaults to 25
};
apiInstance.getProjectList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| Filter projects by owner ID | [optional] 
 **groupId** | **String**| Filter projects by group ID | [optional] 
 **page** | **Number**| Set the page of items to return, defaults to 1 | [optional] 
 **pageSize** | **Number**| Set the number of items per page, defaults to 25 | [optional] 

### Return type

[**ProjectList**](ProjectList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProject

> Project updateProject(id, opts)

Update a project

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.ProjectApi();
let id = "id_example"; // String | ID of test project
let opts = {
  'project': new @IbutsuClient.Project() // Project | Project
};
apiInstance.updateProject(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of test project | 
 **project** | [**Project**](Project.md)| Project | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

