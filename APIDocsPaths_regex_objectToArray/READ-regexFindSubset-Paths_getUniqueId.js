db.getCollection('subset02').aggregate([
    {
        $match: {
            "path"  :{ $regex: /\/contact$/i }
         ,  "method": "get"   
        }
     }
])