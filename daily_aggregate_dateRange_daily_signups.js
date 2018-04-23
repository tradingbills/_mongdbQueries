/*   "segments" : [
        "id" : "59dfe40a0a5037ff1c0bd8af",  "name" : "FREE Clients",
        "id" : "59deb60085a3c22795133b02", "name" : "PAID Clients" ]
*/
var paidClients="59deb60085a3c22795133b02";
var freeClients="59dfe40a0a5037ff1c0bd8af";
var segments=freeClients;
var signupUpperBoundary=1509606000;
var signupLowerBoundary=1509692400;

db.getCollection('intercomUsers20180122').aggregate([
    {"$match": {"signed_up_at":{ $gte: signupLowerBoundary, $lte: signupUpperBoundary } } }

])


