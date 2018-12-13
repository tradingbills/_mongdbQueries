// filter docs first by finding if notes exist in a document
// undwind results to prep search
// match on ....
// project the find full item

var searchZenOrJiraIssuesFor = /piesync/i

db.getCollection('subset02').aggregate([
         { $match: {"zenOrJira.0.issueKey": { "$exists": true }}}
             ,
         {    "$unwind":"$zenOrJira"},
{
  "$match": {
    "$or":[
      { "zenOrJira.issue": { "$regex": searchZenOrJiraIssuesFor } },
      { "zenOrJira.note": { "$regex": searchZenOrJiraIssuesFor } },
      { "zenOrJira.suggestion": { "$regex": searchZenOrJiraIssuesFor } },
      { "zenOrJira.issueKey": { "$regex": searchZenOrJiraIssuesFor } }      
    ]
  }
}
            ,
         {  $project: { "operationId":0, "actualMethodUsed":0, "actualURL":0, "docsURL":0, "description":0 }
         
         } 
 
//          , 
//          "method": "post"
        
    
])