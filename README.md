# Profile Site
This projects is the basis for my personal website. 

Based upon the Squidex Sample.Profile, this has been adapted to my needs and use case.
Multiple additions and updates have been incorporated with many more to come. 

## How to run it?

Just press F5 in Visual Studio, thats it.

## How to run it with a custom app?

Have a look to the Squidex example configuration first: [appsettings.json](https://github.com/Squidex/squidex-samples/blob/master/csharp/Sample.Profile/Sample.Profile/appsettings.json)

You have to change the following settings:

* `appName`: The name of your app.
* `clientId`: The client id, usually: '`appName`:sample-client'
* `clientSecret`: The secret for your client. You can get it from the Squidex UI.

Optionally:

* `url`: The url to your squidex instance, e.g. `http://localhost:5000` if you run it locally.
