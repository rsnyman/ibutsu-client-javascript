# ibutsu.RunApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRun**](RunApi.md#addRun) | **POST** /run | Create a run
[**getRun**](RunApi.md#getRun) | **GET** /run/{id} | Get a single run by ID
[**getRunList**](RunApi.md#getRunList) | **GET** /run | Get a list of the test runs
[**updateRun**](RunApi.md#updateRun) | **PUT** /run/{id} | Update a single run



## addRun

> Run addRun(opts)

Create a run

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.RunApi();
let opts = {
  'run': new ibutsu.Run() // Run | Run item
};
apiInstance.addRun(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run** | [**Run**](Run.md)| Run item | [optional] 

### Return type

[**Run**](Run.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRun

> Run getRun(id)

Get a single run by ID

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.RunApi();
let id = "id_example"; // String | ID of test run
apiInstance.getRun(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of test run | 

### Return type

[**Run**](Run.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRunList

> RunList getRunList(opts)

Get a list of the test runs

The &#x60;filter&#x60; parameter takes a list of filters to apply in the form of:       {name}{operator}{value}   where:    - &#x60;name&#x60; is any valid column in the database   - &#x60;operator&#x60; is one of &#x60;&#x3D;&#x60;, &#x60;!&#x60;, &#x60;＞&#x60;, &#x60;＜&#x60;, &#x60;)&#x60;, &#x60;(&#x60;, &#x60;~&#x60;, &#x60;*&#x60;   - &#x60;value&#x60; is what you want to filter by  Operators are simple correspondents to MongoDB&#39;s query selectors:    - &#x60;&#x3D;&#x60; becomes &#x60;$eq&#x60;   - &#x60;!&#x60; becomes &#x60;$ne&#x60;   - &#x60;＞&#x60; becomes &#x60;$gt&#x60;   - &#x60;＜&#x60; becomes &#x60;$lt&#x60;   - &#x60;)&#x60; becomes &#x60;$gte&#x60;   - &#x60;(&#x60; becomes &#x60;$lte&#x60;   - &#x60;~&#x60; becomes &#x60;$regex&#x60;   - &#x60;*&#x60; becomes &#x60;$in&#x60;   - &#x60;@&#x60; becomes &#x60;$exists&#x60;  Notes:  - For the &#x60;$exists&#x60; operator, \&quot;true\&quot;, \&quot;t\&quot;, \&quot;yes\&quot;, \&quot;y\&quot; and &#x60;1&#x60; will all be considered true,   all other values are considered false.  Example queries:       /result?filter&#x3D;metadata.run&#x3D;63fe5     /result?filter&#x3D;test_id~neg     /result?filter&#x3D;result!passed 

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.RunApi();
let opts = {
  'filter': ["null"], // [String] | Fields to filter by
  'page': 56, // Number | Set the page of items to return, defaults to 1
  'pageSize': 56 // Number | Set the number of items per page, defaults to 25
};
apiInstance.getRunList(opts).then((data) => {
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

[**RunList**](RunList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRun

> Run updateRun(id, run)

Update a single run

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.RunApi();
let id = "id_example"; // String | ID of the test run
let run = new ibutsu.Run(); // Run | The updated test run
apiInstance.updateRun(id, run).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the test run | 
 **run** | [**Run**](Run.md)| The updated test run | 

### Return type

[**Run**](Run.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

