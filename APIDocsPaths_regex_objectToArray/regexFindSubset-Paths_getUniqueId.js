db.getCollection('subset').aggregate([{
        $match: {
            $and: [{
                    "ENDPOINT:": {
                        $regex: /Client\/ListUploadTerms/,
                        '$options': 'i'
                    }
                }

                //                 ,{
                //                     "method.k": "patch"
                //                 }
            ]
        }
    },
    {
        $addFields: {
            "id": 0,
            "tags": "",
            "actualMethodUsed": "",
            "actualURL": "",
            "description": "",
            "docsURL": "",
            "questons": [""]
        }
    }
])