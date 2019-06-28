# CodingAsActivism.MiscApi

All URIs are relative to *https://api.securevan.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**echoesPost**](MiscApi.md#echoesPost) | **POST** /echoes | Hello world
[**events4306Get**](MiscApi.md#events4306Get) | **GET** /events/4306 | Get event details
[**people100879417CanvassResponsesPost**](MiscApi.md#people100879417CanvassResponsesPost) | **POST** /people/100879417/canvassResponses | Collect canvass data
[**peopleFindOrCreatePost**](MiscApi.md#peopleFindOrCreatePost) | **POST** /people/findOrCreate | Create a volunteer record
[**signupsPost**](MiscApi.md#signupsPost) | **POST** /signups | RSVP to an event


<a name="echoesPost"></a>
# **echoesPost**
> echoesPost(contentType, body)

Hello world



### Example
```javascript
var CodingAsActivism = require('coding_as_activism');
var defaultClient = CodingAsActivism.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new CodingAsActivism.MiscApi();

var contentType = "contentType_example"; // String | 

var body = new CodingAsActivism.HelloworldRequest(); // HelloworldRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.echoesPost(contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **body** | [**HelloworldRequest**](HelloworldRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="events4306Get"></a>
# **events4306Get**
> events4306Get(expand, authorization)

Get event details



### Example
```javascript
var CodingAsActivism = require('coding_as_activism');
var defaultClient = CodingAsActivism.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new CodingAsActivism.MiscApi();

var expand = "expand_example"; // String | 

var authorization = "authorization_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.events4306Get(expand, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expand** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="people100879417CanvassResponsesPost"></a>
# **people100879417CanvassResponsesPost**
> people100879417CanvassResponsesPost(contentType, authorization, body)

Collect canvass data



### Example
```javascript
var CodingAsActivism = require('coding_as_activism');
var defaultClient = CodingAsActivism.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new CodingAsActivism.MiscApi();

var contentType = "contentType_example"; // String | 

var authorization = "authorization_example"; // String | 

var body = new CodingAsActivism.CollectcanvassdataRequest(); // CollectcanvassdataRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.people100879417CanvassResponsesPost(contentType, authorization, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **authorization** | **String**|  | 
 **body** | [**CollectcanvassdataRequest**](CollectcanvassdataRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="peopleFindOrCreatePost"></a>
# **peopleFindOrCreatePost**
> peopleFindOrCreatePost(contentType, authorization, body)

Create a volunteer record



### Example
```javascript
var CodingAsActivism = require('coding_as_activism');
var defaultClient = CodingAsActivism.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new CodingAsActivism.MiscApi();

var contentType = "contentType_example"; // String | 

var authorization = "authorization_example"; // String | 

var body = new CodingAsActivism.CreateavolunteerrecordRequest(); // CreateavolunteerrecordRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.peopleFindOrCreatePost(contentType, authorization, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **authorization** | **String**|  | 
 **body** | [**CreateavolunteerrecordRequest**](CreateavolunteerrecordRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signupsPost"></a>
# **signupsPost**
> signupsPost(contentType, authorization, body)

RSVP to an event



### Example
```javascript
var CodingAsActivism = require('coding_as_activism');
var defaultClient = CodingAsActivism.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new CodingAsActivism.MiscApi();

var contentType = "contentType_example"; // String | 

var authorization = "authorization_example"; // String | 

var body = new CodingAsActivism.RSVPtoaneventRequest(); // RSVPtoaneventRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.signupsPost(contentType, authorization, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **authorization** | **String**|  | 
 **body** | [**RSVPtoaneventRequest**](RSVPtoaneventRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

