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
       "path": "$path",
       "method": "$method.k",
       "tags": "$method.v.tags",
       "summary": "$method.v.summary",
       "operationId": "$method.v.operationId"
     }
   },
   {
     $addFields: {
       //             "_id": 0,
       "actualMethodUsed": "",
       "actualURL": "",
       "description": "",
       "docsURL": "",
       "questions": [""],
       "issueKeys": [""]
     }
   },
   {
     $sort: {
       "path": 1,
       "method": 1
     }
   }, {
     $out: "subset02"
   }
 ])