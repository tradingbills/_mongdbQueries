db.getCollection('subset02').aggregate([{
        $match: {
             "zenOrJira.0.issueKey": { "$exists": true }
//           , 
//           "summary": { '$regex': /filtered/, '$options': 'i'}
//          , 
//          "method": "post"
        }
    }
])