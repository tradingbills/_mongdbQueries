/* free users query*/

db.segments.aggregate([{
    "$match": {
        "segments.name": {
            "$regex": /^free/,
            '$options': 'i'
        }
    }
}, {
    "$project": {
        "_id": 0,
        "segments.name": 1,
        "segments.id": 1
    }
}])