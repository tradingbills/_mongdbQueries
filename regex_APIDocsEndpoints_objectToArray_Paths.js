var findPath = "ContactDetails"

db.getCollection('oas').aggregate([{
    "$project": {
        _id: 1,
        "paths": {
            $objectToArray: "$paths"
        }
    }
}, {
    $unwind: "$paths"
}
, {
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
}
, {
    $match: {
        path: {
             $regex : /\/contactdetails/, '$options' : 'i'
        }
    }
}
, {
    $project: {
        "path": "$path",
        "method": "$method.k",
        "operationId": "$method.v.operationId",
        "schemaDef": "$method.v.responses.200.schema"
    }
 }
]);