db.getCollection('oas').aggregate([{
    $project: {
        _id: 0,
        "definition": {
            $objectToArray: "$definitions"
        }
    }
}, {
    $unwind: "$definition"
}, {
    $project: {
        _id: 0,
        "definition.k": 1,
        "definition.v": 1
    }
}])