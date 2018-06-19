 var findPath = "/";
 db.getCollection("oas").aggregate([{
   $project: {
     _id: 1,
     paths: {
       $objectToArray: "$paths"
     }
   }
 }, {
   $unwind: "$paths"
 }, {
   $project: {
     _id: 0,
     path: "$paths"
   }
 }, {
   $project: {
     path: "$path.k",
     method: {
       $objectToArray: "$path.v"
     }
   }
 }, {
   $unwind: "$method"
 }, {
   $project: {
     "ENDPOINT:": "$path",
     method: "$method.k",
     operationId: "$method.v.operationId"
   }
 }, {
   $sort: {
     "ENDPOINT:": 1,
     operationId: 1
   }
 }, {
   $out: "subset"
 }])