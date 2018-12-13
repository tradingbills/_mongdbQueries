/*
// for editing multiple docs with same notes, put ids in string delimited by a comma
// read above , csv, map, compilation = 
*/
//var myStr="5b2d17a95fc8779ec37a8d39, 5b2d17a95fc8779ec37a8d40, 5b2d17a95fc8779ec37a8d34"
 var myStr = ""  //read above, string can have many
var myArr=myStr.split(",") //trim in query string

//     for multiple additions use $each https://docs.mongodb.com/manual/reference/operator/update/each/#up._S_each
//     $addToSet :  	Adds elements to an array only if they do not already exist in the set.
// var addDoc =  {"$addToSet":{"zenOrJira":zenOrJira}}
//     $push : Adds an item to an array.
// var addDoc =  {"$push":{"zenOrJira":zenOrJira}}
for( let objId of myArr){
  db.getCollection('subset02').update({"_id": ObjectId(objId.trim())}, {$pop:{"zenOrJira":1}  })
}
