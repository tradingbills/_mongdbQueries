db.getCollection('subset01').aggregate([{
        $match: {
            $and: [{
                    "ENDPOINT:": {
                        $regex: /\/Contact\/{[a-zA-Z{}]+?\b/,
                        '$options': 'i'
                    }
                }
                ,{
                    "method": "patch"
                }
            ]
        }
    },
    {
        $addFields: {
            //             "_id": 0,
            "actualMethodUsed": "",
            "actualURL": "",
            "description": "",
            "docsURL": "",
            "questons": [""]
        }
    }
])