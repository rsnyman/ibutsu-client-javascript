# ibutsu.ResultApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addResult**](ResultApi.md#addResult) | **POST** /result | Create a test result
[**getResult**](ResultApi.md#getResult) | **GET** /result/{id} | Get a single result
[**getResultList**](ResultApi.md#getResultList) | **GET** /result | Get the list of results.
[**updateResult**](ResultApi.md#updateResult) | **PUT** /result/{id} | Updates a single result



## addResult

> Result addResult(opts)

Create a test result

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ResultApi();
let opts = {
  'result': new ibutsu.Result() // Result | Result item
};
apiInstance.addResult(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **result** | [**Result**](Result.md)| Result item | [optional] 

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getResult

> Result getResult(id)

Get a single result

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ResultApi();
let id = "id_example"; // String | ID of pet to return
apiInstance.getResult(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of pet to return | 

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResultList

> ResultList getResultList(opts)

Get the list of results.

The &#x60;filter&#x60; parameter takes a list of filters to apply in the form of:      {name}{operator}{value}  where:    - &#x60;name&#x60; is any valid column in the database   - &#x60;operator&#x60; is one of &#x60;&#x3D;&#x60;, &#x60;!&#x60;, &#x60;＞&#x60;, &#x60;＜&#x60;, &#x60;)&#x60;, &#x60;(&#x60;, &#x60;~&#x60;, &#x60;*&#x60;   - &#x60;value&#x60; is what you want to filter by  Operators are simple correspondents to MongoDB&#39;s query selectors:    - &#x60;&#x3D;&#x60; becomes &#x60;$eq&#x60;   - &#x60;!&#x60; becomes &#x60;$ne&#x60;   - &#x60;＞&#x60; becomes &#x60;$gt&#x60;   - &#x60;＜&#x60; becomes &#x60;$lt&#x60;   - &#x60;)&#x60; becomes &#x60;$gte&#x60;   - &#x60;(&#x60; becomes &#x60;$lte&#x60;   - &#x60;~&#x60; becomes &#x60;$regex&#x60;   - &#x60;*&#x60; becomes &#x60;$in&#x60;   - &#x60;@&#x60; becomes &#x60;$exists&#x60;  Notes:  - For the &#x60;$exists&#x60; operator, \&quot;true\&quot;, \&quot;t\&quot;, \&quot;yes\&quot;, \&quot;y\&quot; and &#x60;1&#x60; will all be considered true,   all other values are considered false.  Example queries:      /result?filter&#x3D;metadata.run&#x3D;63fe5     /result?filter&#x3D;test_id~neg     /result?filter&#x3D;result!passed 

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ResultApi();
let opts = {
  'filter': ["null"], // [String] | Fields to filter by
  'applyMax': true, // Boolean | Use a max to limit documents returned
  'page': 56, // Number | Set the page of items to return, defaults to 1
  'pageSize': 56 // Number | Set the number of items per page, defaults to 25
};
apiInstance.getResultList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**[String]**](String.md)| Fields to filter by | [optional] 
 **applyMax** | **Boolean**| Use a max to limit documents returned | [optional] 
 **page** | **Number**| Set the page of items to return, defaults to 1 | [optional] 
 **pageSize** | **Number**| Set the number of items per page, defaults to 25 | [optional] 

### Return type

[**ResultList**](ResultList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateResult

> Result updateResult(id, opts)

Updates a single result

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ResultApi();
let id = "id_example"; // String | ID of result to update
let opts = {
  'result': new ibutsu.Result() // Result | Result item
};
apiInstance.updateResult(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of result to update | 
 **result** | [**Result**](Result.md)| Result item | [optional] 

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

