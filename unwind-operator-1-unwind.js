/* separates document array into stream of docs, based on provide document's array field name.
   like saying, unwind this array named 'addresses', where 'addresses' is an array of objects
   see two commented out lines below for actual documents and for unwinded docs based on address
*/
/* 1 actual docs*/
// db.getCollection('testUserUnwind').find({});
/* 2 unwinded docs based on address array*/
// db.getCollection('testUserUnwind').aggregate({ $unwind : "$addresses" })