window.smallTable = (function () {
function smallTable () {
  // nothing really to do here   
}
 
var smallTable = 
{

  query: function (database, fields, constraints, group){

    var result = new Array ();

    // index is only used for grouping/aggregation
    var index = new Object ();

    var constraintTypes = Object.keys(constraints);

    for (var idx = 0; idx < database.length; idx++){

      var entry = database[idx];
      var fulfillsConstraints = true;
      for (var i = 0; i < constraintTypes.length; i++){
        if (entry[constraintTypes[i]] != constraints[constraintTypes[i]]){
          fulfillsConstraints = false;
          break;
        }
      }


      var cursor = index;

      // enforce constraints
      if (fulfillsConstraints){
        // create new object only with relevant fields
        var newEntry = new Object ();
        if(!group){
          // if we do not group we can add the entry immediately
          result[result.length] = newEntry;
        }
        var newEntry = new Object ();
        for (var i = 0; i < fields.length; i++){
          // for grouping we need make sure we do not create too many entries
          if (group){
            if (i < fields.length - 1){
              if (cursor[entry[fields[i]]] == undefined){
                cursor[entry[fields[i]]] = new Object();
              }
              cursor = cursor[entry[fields[i]]];
            }
            else {
              // we are at the last field now this is the field we are going to aggregate
              // so don't add it to the index 
              if (cursor.entry == undefined){
                // we do not have an entry, let's add one
                result[result.length] = newEntry; 
                cursor.entry = newEntry;
              }
              else {
                cursor.entry[fields[i]] += entry [fields[i]];
              }
            }
          }
          newEntry[fields[i]] = entry [fields[i]];
        }
      }
    }
    return result;
  }
};
return smallTable;
}());    









/*

    // this is the small table code

    smallTable = new Object ();

    smallTable.query = function (database, fields, constraints, group){

      var result = new Array ();

      // index is only used for grouping/aggregation
      var index = new Object ();

      var constraintTypes = Object.keys(constraints);

      for (var idx = 0; idx < database.length; idx++){

        var entry = database[idx];
        var fulfillsConstraints = true;
        for (var i = 0; i < constraintTypes.length; i++){
          if (entry[constraintTypes[i]] != constraints[constraintTypes[i]]){
            fulfillsConstraints = false;
            break;
          }
        }


        var cursor = index;

        // enforce constraints
        if (fulfillsConstraints){
          // create new object only with relevant fields
          var newEntry = new Object ();
          if(!group){
            // if we do not group we can add the entry immediately
            result[result.length] = newEntry;
          }
          var newEntry = new Object ();
          for (var i = 0; i < fields.length; i++){
            // for grouping we need make sure we do not create too many entries
            if (group){
              if (i < fields.length - 1){
                if (cursor[entry[fields[i]]] == undefined){
                  cursor[entry[fields[i]]] = new Object();
                }
                cursor = cursor[entry[fields[i]]];
              }
              else {
                // we are at the last field now this is the field we are going to aggregate
                // so don't add it to the index 
                if (cursor.entry == undefined){
                  // we do not have an entry, let's add one
                  result[result.length] = newEntry; 
                  cursor.entry = newEntry;
                }
                else {
                  cursor.entry[fields[i]] += entry [fields[i]];
                }
              }
            }
            newEntry[fields[i]] = entry [fields[i]];
          }
        }
      }
      return result;
    }
*/