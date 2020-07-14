# ibutsu.ReportApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReport**](ReportApi.md#addReport) | **POST** /report | Create a new report
[**deleteReport**](ReportApi.md#deleteReport) | **DELETE** /report/{id} | Delete a report
[**downloadReport**](ReportApi.md#downloadReport) | **GET** /report/{id}/download/{filename} | Download a report
[**getReport**](ReportApi.md#getReport) | **GET** /report/{id} | Get a report
[**getReportList**](ReportApi.md#getReportList) | **GET** /report | Get a list of reports
[**getReportTypes**](ReportApi.md#getReportTypes) | **GET** /report/types | Get a list of report types
[**viewReport**](ReportApi.md#viewReport) | **GET** /report/{id}/view/{filename} | View a report



## addReport

> Report addReport(reportParameters)

Create a new report

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ReportApi();
let reportParameters = new ibutsu.ReportParameters(); // ReportParameters | The parameters for the report
apiInstance.addReport(reportParameters).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportParameters** | [**ReportParameters**](ReportParameters.md)| The parameters for the report | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteReport

> deleteReport(id)

Delete a report

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ReportApi();
let id = "id_example"; // String | ID of report to delete
apiInstance.deleteReport(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of report to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadReport

> File downloadReport(id, filename)

Download a report

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ReportApi();
let id = "id_example"; // String | The ID of the report
let filename = "filename_example"; // String | The file name of the downloadable report
apiInstance.downloadReport(id, filename).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the report | 
 **filename** | **String**| The file name of the downloadable report | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/csv, application/json, text/html, application/zip


## getReport

> Report getReport(id)

Get a report

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ReportApi();
let id = "id_example"; // String | The ID of the report
apiInstance.getReport(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the report | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportList

> ReportList getReportList(opts)

Get a list of reports

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ReportApi();
let opts = {
  'page': 56, // Number | Set the page of items to return, defaults to 1
  'pageSize': 56, // Number | Set the number of items per page, defaults to 25
  'project': "project_example" // String | Filter reports by project ID
};
apiInstance.getReportList(opts).then((data) => {
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
 **project** | **String**| Filter reports by project ID | [optional] 

### Return type

[**ReportList**](ReportList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportTypes

> [InlineResponse200] getReportTypes()

Get a list of report types

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ReportApi();
apiInstance.getReportTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewReport

> File viewReport(id, filename)

View a report

### Example

```javascript
import ibutsu from '@ibutsu/client';

let apiInstance = new ibutsu.ReportApi();
let id = "id_example"; // String | The ID of the report
let filename = "filename_example"; // String | The file name of the downloadable report
apiInstance.viewReport(id, filename).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the report | 
 **filename** | **String**| The file name of the downloadable report | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/csv, application/json, text/html, application/zip

