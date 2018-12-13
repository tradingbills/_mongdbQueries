var zenOrJira= 
{"issueKey":"123",
    "note":"test"
}

//     for multiple additions use $each https://docs.mongodb.com/manual/reference/operator/update/each/#up._S_each
//     $addToSet :  	Adds elements to an array only if they do not already exist in the set.
// var addDoc =  {"$addToSet":{"zenOrJira":zenOrJira}}
//     $push : Adds an item to an array.
// var addDoc =  {"$push":{"zenOrJira":zenOrJira}}
db.getCollection('subset02').update({"_id" : ObjectId("5b2d17a95fc8779ec37a8d07")}, addDoc)