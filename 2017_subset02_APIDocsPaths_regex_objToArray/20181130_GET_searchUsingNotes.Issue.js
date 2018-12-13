// filter docs first by finding if notes exist in a document
// undwind results to prep search
// match on ....
// project the find full item

var searchZenOrJiraIssuesFor = /not/i

db.getCollection('subset02').aggregate([
         { $match: {"zenOrJira.0.issueKey": { "$exists": true }}}
             ,
         {    "$unwind":"$zenOrJira"}
             , 
         {  $match: { "zenOrJira.issue": { '$regex': searchZenOrJiraIssuesFor}}}
            ,
         {  $project: { _id: 1, 
             "zenOrJira.issue": "$zenOrJira.issue"
             , "zenOrJira.suggestion": "$zenOrJira.suggestion"
             , "zenOrJira.note":"$zenOrJira.note"
             ,"zenOrJira.issueKey": "$zenOrJira.issueKey" }}
//          , 
//          "method": "post"
        
    
])