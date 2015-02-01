# smalltable

## About

smalltable is a Big Table inspired JavaScript library to converts an arrar of JavaScript objects into a database.

## Usage

smalltable is a very easy to use library and provides basic database-like functionalities. It was designed for simple datamanapulations on a raw dataset like filtering or aggreation.

The library constists of one method *query* which takes a number of paramters. 

* database. The array of JavaScript objects you want to work with.
* fields. The fields of the returned JavaScript objects.
* constraints. Query constraints for individual fields. Currently only exaxt match is supported. 
* aggregation. Defines whether the **last** field of the field array should be aggregated. Right now only sum is supported. 
 
This is pretty much everything there is in smalltable.

## Example

Let's assume we have a simple data set of two elemetns.


Return all elements that are fruit and cost 10.0. 

``` javascript
  fields = ['type', 'name'];
  constraints = {
    type: 'fruit',
    price: '10'
  };
  smallTable.query(data, fields, constraints, false);
```





