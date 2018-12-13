queryDoc["$match"] = {}
// |-------------  PATH SEARCH  -------------|
queryDoc["$match"]["path"] = {"$regex": /csv\/upload/i}
// |-------------  DESCRIPTION SEARCH  -------------|
//queryDoc["$match"].summary = { "$regex": /filtered/, "$options": "i"}
// |-------------  METHOD SEARC  -------------|
// queryDoc["$match"]["method"] = "get"
// FINAL SEARCH DOC
db.getCollection("subset02").aggregate([queryDoc])