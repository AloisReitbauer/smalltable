# smalltable

## About

smalltable is a Big Table inspired JavaScript library that converts an array of JavaScript objects into a database.

## Usage

smalltable is a very easy to use library and provides basic database-like functionalities. It was designed for simple data manapulation like filtering or aggregation on a raw dataset .

The library consists of one method *query* which takes a number of paramters. 

* **database.** The array of JavaScript objects you want to work with.
* **fields.** The fields of the returned JavaScript objects.
* **constraints.** Query constraints for individual fields. Currently only exact match is supported. 
* **aggregation.** Defines whether the **last** field of the field array should be aggregated. Right now only sum is supported. 
 
This is pretty much everything there is for now.

## Example

Let's assume we have a simple data set of two elements.

``` javascript
var data = [
  {type:'fruit', name:'Banana', price: 10.0},
  {type:'vegetable', name: 'Tomato', price: 5.0}
  ];
```

Return all elements that are fruit and cost 10.0. 

``` javascript
fields = ['type', 'name'];
constraints = {
  type: 'fruit',
  price: '10'
};
smallTable.query(data, fields, constraints, false);
```





