db.getCollection('intercomUsers').find( 
{$and :[
{"last_request_at":{ $gt: 1506816000 } },
{"last_request_at":{ $lt: 1509408000 } }
]
}
).count()
