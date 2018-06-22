db.getCollection('subset02').aggregate([{
        $match: {
            "path": {
                $regex: /Contact/,
                '$options': 'i'
            }
            ,
            "method": "patch"
        }
    }
])