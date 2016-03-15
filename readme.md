React Playground
========================================================

This is just a set of examples or proofs of concept.


## Install

1. `git clone https://github.com/boyhagemann/react-playground`
2. Go to your project folder and run `npm install`
3. Run any example, like `npm run example3`
4. Go to `http://localhost:8080` and view the result

## Example 1
This is a basic example that turns a JSON-LD config into a React view

## Example 2
This one uses an external data source to get the config.
For now it is using Neo4j for handling the graph structure of the config.
You need to install the [Data Tree] (http://github.com/boyhagemann/data-tree) package and follow the install instructions there

## Example 3
This example displays a collection of nodes, based on a central Redux store

## Example 4
In this example the properties of the React components have placeholders, like `{label}`.
These are replaced by actual values from a collection of data pulled from a Redux store.


## Todo

* [x] Build from json file
* [x] Get json from data store (Neo4j)
* [x] Add presentional components
* [x] Add container components
* [x] Integrate Redux stores
* [ ] Interact with store
* [ ] Get data from external source
* [ ] Add routes
* [ ] Integrate Draft.js with placeholders
* [ ] Build a UI for managing nodes and properties

