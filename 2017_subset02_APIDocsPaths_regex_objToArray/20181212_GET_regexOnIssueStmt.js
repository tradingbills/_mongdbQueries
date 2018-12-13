// find if notes exist per document
// undwind to prep search
// match on ....
// project the find full item

db.getCollection('subset02').aggregate([
         { $match: {"zenOrJira.0.issueKey": { "$exists": true }}}
             ,
         {    "$unwind":"$zenOrJira"}
             , 
         {  $match: { "zenOrJira.issue": { '$regex': /not/, '$options': 'i'}}}
            ,
         {  $project: { _id: 1, "zenOrJira": "$zenOrJira.issue", "suggestion": "$zenOrJira.suggestion", "note":"$zenOrJira.note","issueKey": "$zenOrJira.issueKey" }}
//          , 
//          "method": "post"
        
    
])