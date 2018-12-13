queryDoc["$match"] = {}
// field 'summary' == 'endpoint description on public fsdocs site'
queryDoc["$match"].summary = { "$regex": /filtered/, "$options": "i"}
queryDoc["$match"]["path"] = {"$regex": /details/, "$options": "i"}
queryDoc["$match"]["method"] = "get"



db.getCollection("subset02").aggregate([queryDoc])