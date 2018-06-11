db.getCollection('oas').aggregate([{
    "$project": {
        _id: 1,
        "paths": {
            $objectToArray: "$paths"
        }
    }
}, {
    $unwind: "$paths"
}, {
    $project: {
        _id: 0,
        path: "$paths"
    }
}, {
    "$project": {
        "path": "$path.k",
        "method": {
            $objectToArray: "$path.v"
        }
    }
}, {
    $unwind: "$method"
}, {
    $match: {
        path: {
            $eq: "/Client/SubAccount"
        }
    }
}, {
    $project: {
        "path": "$path",
        "method": "$method.k",
        "schemaDef": "$method.v.responses.200.schema"
    }
}]);