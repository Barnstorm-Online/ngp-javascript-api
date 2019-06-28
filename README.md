# coding_as_activism

CodingAsActivism - JavaScript client for coding_as_activism
TODO: Add Description
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install coding_as_activism --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your coding_as_activism from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('coding_as_activism')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CodingAsActivism = require('coding_as_activism');

var defaultClient = CodingAsActivism.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME'
auth.password = 'YOUR PASSWORD'

var api = new CodingAsActivism.MiscApi()

var contentType = "contentType_example"; // {String} 

var body = new CodingAsActivism.HelloworldRequest(); // {HelloworldRequest} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.echoesPost(contentType, body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.securevan.com/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CodingAsActivism.MiscApi* | [**echoesPost**](docs/MiscApi.md#echoesPost) | **POST** /echoes | Hello world
*CodingAsActivism.MiscApi* | [**events4306Get**](docs/MiscApi.md#events4306Get) | **GET** /events/4306 | Get event details
*CodingAsActivism.MiscApi* | [**people100879417CanvassResponsesPost**](docs/MiscApi.md#people100879417CanvassResponsesPost) | **POST** /people/100879417/canvassResponses | Collect canvass data
*CodingAsActivism.MiscApi* | [**peopleFindOrCreatePost**](docs/MiscApi.md#peopleFindOrCreatePost) | **POST** /people/findOrCreate | Create a volunteer record
*CodingAsActivism.MiscApi* | [**signupsPost**](docs/MiscApi.md#signupsPost) | **POST** /signups | RSVP to an event


## Documentation for Models

 - [CodingAsActivism.CanvassContext](docs/CanvassContext.md)
 - [CodingAsActivism.CollectcanvassdataRequest](docs/CollectcanvassdataRequest.md)
 - [CodingAsActivism.CreateavolunteerrecordRequest](docs/CreateavolunteerrecordRequest.md)
 - [CodingAsActivism.Email](docs/Email.md)
 - [CodingAsActivism.Event](docs/Event.md)
 - [CodingAsActivism.HelloworldRequest](docs/HelloworldRequest.md)
 - [CodingAsActivism.Location](docs/Location.md)
 - [CodingAsActivism.Person](docs/Person.md)
 - [CodingAsActivism.RSVPtoaneventRequest](docs/RSVPtoaneventRequest.md)
 - [CodingAsActivism.Response](docs/Response.md)
 - [CodingAsActivism.Role](docs/Role.md)
 - [CodingAsActivism.Shift](docs/Shift.md)
 - [CodingAsActivism.Status](docs/Status.md)


## Documentation for Authorization


### auth

- **Type**: HTTP basic authentication
