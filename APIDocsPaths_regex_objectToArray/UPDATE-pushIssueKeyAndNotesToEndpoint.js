var objId = "5b2d17a95fc8779ec37a8d35"
var zenOrJira= 
{"issueKey":"zendeskLink",
    "slackURL01":"https://benchmarkgroup.slack.com/archives/G9WUP4E76/p1522945784000194",
    "slackURL02":"https://benchmarkgroup.slack.com/archives/C9YNE77PC/p1522953005000296",
    "issue": "Can't list all contacts",
    "suggestion":"consider the params used in the querystring, ",
    "note":"this was for piesync and their syncing rules"
}

//     for multiple additions use $each https://docs.mongodb.com/manual/reference/operator/update/each/#up._S_each
//     $addToSet :  	Adds elements to an array only if they do not already exist in the set.
// var addDoc =  {"$addToSet":{"zenOrJira":zenOrJira}}
//     $push : Adds an item to an array.
// var addDoc =  {"$push":{"zenOrJira":zenOrJira}}
db.getCollection('subset02').update({"_id": ObjectId(objId)}, {$push:{"zenOrJira":zenOrJira}  })