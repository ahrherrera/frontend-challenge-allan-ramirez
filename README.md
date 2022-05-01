
# Frontend Challenge - Allan Ramirez

This project was built with Ionic Framework as a Code Challenge for the Mobile Developer Position in Plan A Technologies.

## Installation

### Ionic Framework v6 - Requires Node v12.x or later

```bash
  npm install -g @ionic/cli
```

### Run the project

- Install project dependencies 
```bash
  npm install
```

- Run the app

```bash
  ionic serve
```

## Details

- The environment variables there are three important variables:

`M3O_API_TOKEN` - string : Is the API Token to make request to Countries and Holidays API
    Currently the account I created does not have credits. So internally I load static data I got from the [M3O API](https://m3o.com/holidays/api#List)

`API_URL` - string : M3O APi url to request data

`firebaseConfig` - dynamic object : Due to login system I implemented using Firebase Auth, this setting is required.

### Login

The login system I implemented is Firebase Auth:

There are 2 user accounts I created to test and build the app:

```bash
  aramirez@myapp.com : allan1097
  test@myapp.com : abc123#
```

So you can use these credentials to use my app.

