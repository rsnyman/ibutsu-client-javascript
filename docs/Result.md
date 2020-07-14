# ibutsu.Result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the test result | [optional] 
**testId** | **String** | Unique id | [optional] 
**startTime** | **Number** | Timestamp of starttime. | [optional] 
**duration** | **Number** | Duration of test in seconds. | [optional] 
**result** | **String** | Status of result. | [optional] 
**metadata** | [**Object**](.md) |  | [optional] 
**params** | [**Object**](.md) |  | [optional] 
**source** | **String** | Where the data came from (useful for filtering) | [optional] 



## Enum: ResultEnum


* `passed` (value: `"passed"`)

* `failed` (value: `"failed"`)

* `error` (value: `"error"`)

* `skipped` (value: `"skipped"`)




