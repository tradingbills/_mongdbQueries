// find if notes exist per document
// undwind to prep search
// match on ....
// project the find full item

var zenOrJiraIssueDoc = /not/i

db.getCollection('subset02').aggregate([
         { $match: {"zenOrJira.0.issueKey": { "$exists": true }}}
             ,
         {    "$unwind":"$zenOrJira"}
             , 
         {  $match: { "zenOrJira.issue": { '$regex': zenOrJiraIssueDoc}}}
            ,
         {  $project: { _id: 1, 
             "zenOrJira.issue": "$zenOrJira.issue"
             , "zenOrJira.suggestion": "$zenOrJira.suggestion"
             , "zenOrJira.note":"$zenOrJira.note"
             ,"zenOrJira.issueKey": "$zenOrJira.issueKey" }}
//          , 
//          "method": "post"
        
    
])