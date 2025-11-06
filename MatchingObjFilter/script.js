/*
In this lab, you will create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.

STEPS:
Get all keys from the source object using Object.keys(source)
Use .filter() to loop through each object in collection
For each object:
Check if every key in source exists in the object and
The value matches the one in source

****
Object.keys(source) → gets all property names to check.
.every() → ensures all keys and their values match.
.filter() → returns a new array with only the objects that pass the test.


*/
