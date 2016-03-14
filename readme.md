React Playground
--------------------------------------------------

This is just a set of examples or proofs of concept.


## Install

1. `git clone https://github.com/boyhagemann/react-playground`
2. `npm install`
3. Run any example, like `npm run example3`
4. Go to `http://localhost:8080` and view the result

## Example 1
This is a basic example that turns a JSON-LD config into a React view

## Example 2
This one uses an external data source to get the config.
For now it is using Neo4j for handling the graph structure of the config.
To use the Neo4j graph database:
1. Install Docker
2. Install the official Neo4j image
3. Go to the browser interface and run this query:
```
CREATE (a:Node {id: 1, name: "root"})
CREATE (v1:Box {id: 2, class: "box box--offset m p"})
CREATE (b:Node {id: 3, name: "child 1"})
CREATE (c:Node {id: 4, name: "child 2"})
CREATE (v2:Link {id: 5, href: "/testurl", class: "btn btn--positive"})
CREATE (d:Node {id: 6, name: "child 3"})
CREATE (v3:Text {id: 7, text: "Hello"})
CREATE (e:Node {id: 8, name: "child 4"})
CREATE (v4:Text {id: 9, text: "World"})
CREATE (b) - [:HAS_PARENT] -> (a)
CREATE (c) - [:HAS_PARENT] -> (a)
CREATE (d) - [:HAS_PARENT] -> (c)
CREATE (e) - [:HAS_PARENT] -> (c)
CREATE a - [:HAS_VALUE] -> v1
CREATE c - [:HAS_VALUE] -> v2
CREATE d - [:HAS_VALUE] -> v3
CREATE e - [:HAS_VALUE] -> v4
```

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
* [ ] Add routes
* [ ] Integrate Draft.js with placeholders
* [ ] Build a UI for managing nodes and properties

