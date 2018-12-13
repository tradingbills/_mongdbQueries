// find if notes exist per document, undwind to prep search, match on ....,  project the find full item
// initialize vars for aggregation stages
var qDocIssuesExistForEndpointBool = {}
var qDocMatchOnZenOrJiraProps = {}
var projectStage = {}
// initialize aggregation operators for respective stages
qDocIssuesExistForEndpointBool["$match"] = {}
qDocMatchOnZenOrJiraProps["$match"] = {}
projectStage["$project"] = {}

qDocIssuesExistForEndpointBool["$match"]["zenOrJira.0.issueKey"] = {
  "$exists": true
}

// search filter values for zenOrJira props and aggregation stages
// |-----------------------------------------------------------------------
// // |---- issue
// var zenOrJiraIssueDoc= /bad/i         
// qDocMatchOnZenOrJiraProps["$match"]["zenOrJira.issue"] = {
//   '$regex': zenOrJiraIssueDoc
// }

// |-----------------------------------------------------------------------
// // |---- suggestion
// var zenOrJiraSuggestionDoc = /add/i
// qDocMatchOnZenOrJiraProps["$match"]["zenOrJira.suggestion"] = {
//   '$regex': zenOrJiraSuggestionDoc
// }

// |-----------------------------------------------------------------------
// // |---- note
var zenOrJiraNoteDoc = /code/i
qDocMatchOnZenOrJiraProps["$match"]["zenOrJira.note"] = {
  '$regex': zenOrJiraNoteDoc
}

// |-----------------------------------------------------------------------
// |-----------------------------------------------------------------------
// // |---- issueKey
var zenOrJiraIssueKeyDoc = /627589/i
qDocMatchOnZenOrJiraProps["$match"]["zenOrJira.issueKey"] = {
  '$regex': zenOrJiraIssueKeyDoc
}

// |-----------------------------------------------------------------------
// // |---- project
projectStage["$project"] = {
  _id: 1,
    "method":"$method",
    "path":"$path",
  "zenOrJira.issue": "$zenOrJira.issue",
  "zenOrJira.suggestion": "$zenOrJira.suggestion",
  "zenOrJira.note": "$zenOrJira.note",
  "zenOrJira.issueKey": "$zenOrJira.issueKey"
}

// |-----------------------------------------------------------------------
// // |---- Execute Query
db.getCollection('subset02').aggregate([
  qDocIssuesExistForEndpointBool, {
    "$unwind": "$zenOrJira"
  },
  qDocMatchOnZenOrJiraProps, projectStage
  //           , 
  //          "method": "post"
])