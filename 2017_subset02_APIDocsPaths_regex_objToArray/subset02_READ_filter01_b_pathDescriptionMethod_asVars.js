var pathDoc = /contact/i
var summaryDoc = /filtered/i
var methodDoc = 'get'

var queryDoc= {}
queryDoc["$match"]= {}
queryDoc["$match"]["path"] = { "$regex": pathDoc}
queryDoc["$match"].summary = { "$regex": summaryDoc}
queryDoc["$match"]["method"] = methodDoc

db.getCollection('subset02').aggregate([ queryDoc ])