db.getCollection('subset').aggregate([
    {
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
        $addFields : { 
            "tags":"",
    "actualMethodUsed": "" ,
    "actualURL": "",
    "description" : "",
    "docsURL":"",
    "questons":[""]
    }
}
])