# @IbutsuClient.HealthApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDatabaseHealth**](HealthApi.md#getDatabaseHealth) | **GET** /health/database | Get a health report for the database
[**getHealth**](HealthApi.md#getHealth) | **GET** /health | Get a general health report
[**getHealthInfo**](HealthApi.md#getHealthInfo) | **GET** /health/info | Get information about the server



## getDatabaseHealth

> Health getDatabaseHealth()

Get a health report for the database

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.HealthApi();
apiInstance.getDatabaseHealth().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Health**](Health.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHealth

> Health getHealth()

Get a general health report

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.HealthApi();
apiInstance.getHealth().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Health**](Health.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHealthInfo

> HealthInfo getHealthInfo()

Get information about the server

### Example

```javascript
import @IbutsuClient from '@ibutsu/client';

let apiInstance = new @IbutsuClient.HealthApi();
apiInstance.getHealthInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**HealthInfo**](HealthInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

