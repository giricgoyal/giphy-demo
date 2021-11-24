# Giphy Demo

[Demo](http://giphy.demos.giricgoyal.com/index.html)

What you can do with the demo:
1. See the trending gifs.
2. Search for gifs.
3. Browse through the renditions.


## Pre-requisites
1. git
2. yarn
3. node

## Running application locally

```shell
yarn
```

```shell
yarn start
```
NOTE: Will start the application in localhost:3001 using webpack dev server

## Testing the project

Updating snapshot
```shell
yarn test:update-snapshot
```

Running unit tests
```shell
yarn test
```

Running e2e tests
```shell
yarn start
```

```shell
yarn e2e
```


### Testing notes
Unit tests cover most of the use cases except the pagination.
Pagination is covered by e2e tests and the search and renditions workflows.
