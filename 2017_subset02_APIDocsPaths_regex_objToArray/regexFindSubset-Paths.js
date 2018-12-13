db.getCollection('subset').aggregate([
    {
        $match: {
            $and: [{
                    "ENDPOINT:": {
                        $regex: /({ListID})+\/contactdetails/,
                        '$options': 'i'
                    }
                }
                    
//                 ,{
//                     "method.k": "patch"
//                 }
            ]
        }
    }

])