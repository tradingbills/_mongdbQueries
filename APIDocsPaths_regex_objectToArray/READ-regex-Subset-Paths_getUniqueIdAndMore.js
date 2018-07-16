let queryDoc = {}
queryDoc["$match"] = {}
queryDoc["$match"]["path"] = {"$regex": /details/, "$options": "i"}
queryDoc["$match"].summary = { "$regex": /filtered/, "$options": "i"}
//queryDoc["$match"].method = "post"

// db.getCollection("subset02").aggregate([queryDoc])