# ibutsu.GroupApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroup**](GroupApi.md#addGroup) | **POST** /group | Create a new group
[**getGroup**](GroupApi.md#getGroup) | **GET** /group/{id} | Get a group
[**getGroupList**](GroupApi.md#getGroupList) | **GET** /group | Get a list of groups
[**updateGroup**](GroupApi.md#updateGroup) | **PUT** /group/{id} | Update a group



## addGroup

> Group addGroup(group)

Create a new group

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.GroupApi();
let group = new ibutsu.Group(); // Group | The group
apiInstance.addGroup(group).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)| The group | 

### Return type

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getGroup

> Group getGroup(id)

Get a group

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.GroupApi();
let id = "id_example"; // String | The ID of the group
apiInstance.getGroup(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the group | 

### Return type

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroupList

> GroupList getGroupList(opts)

Get a list of groups

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.GroupApi();
let opts = {
  'page': 56, // Number | Set the page of items to return, defaults to 1
  'pageSize': 56 // Number | Set the number of items per page, defaults to 25
};
apiInstance.getGroupList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Set the page of items to return, defaults to 1 | [optional] 
 **pageSize** | **Number**| Set the number of items per page, defaults to 25 | [optional] 

### Return type

[**GroupList**](GroupList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGroup

> Group updateGroup(id, group)

Update a group

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.GroupApi();
let id = "id_example"; // String | The ID of the group
let group = new ibutsu.Group(); // Group | The updated group
apiInstance.updateGroup(id, group).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the group | 
 **group** | [**Group**](Group.md)| The updated group | 

### Return type

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

