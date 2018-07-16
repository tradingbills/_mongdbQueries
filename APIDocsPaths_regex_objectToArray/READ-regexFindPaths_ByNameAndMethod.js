var regex01 = /\/contact$/i

var queryDoc01= {}
queryDoc01["$match"]= {}
queryDoc01["$match"]["path"] ={ $regex: regex01}
queryDoc01["$match"]["method"] = "get"

db.getCollection('subset02').aggregate([ queryDoc01 ])