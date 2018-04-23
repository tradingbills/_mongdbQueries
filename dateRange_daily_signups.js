var lowerBoundary=1509606000;
var upperBoundary=1509692400;
print(upperBoundary-lowerBoundary);

db.getCollection('intercomUsers20171103').find( 
{$and :[
{"signed_up_at":{ $gt: lowerBoundary } },
{"signed_up_at":{ $lt: upperBoundary } },
//{"email":"integration.benchmarkemail@gmail.com"}
]
}
).count();


