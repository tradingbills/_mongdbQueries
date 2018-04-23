/*   "segments" : [
        "id" : "59dfe40a0a5037ff1c0bd8af",  "name" : "FREE Clients",
        "id" : "59deb60085a3c22795133b02", "name" : "PAID Clients" ]
*/
/* 
/* The argument for startDate is :2017-12-26 00:00:00
The argument ofr endDate is : 2017-01-25 23:59:00

 Query is : find( 
 {"signed_up_at" :{$gte:1514275200, $lte:1516953599}}
Total signups are : 6849
*/
var paidClients="59deb60085a3c22795133b02";
var freeClients="59dfe40a0a5037ff1c0bd8af";
var segments=freeClients;
var signupUpperBoundary=1516953599;
var signupLowerBoundary=1514275200;

db.getCollection('intercomUsers20180122').aggregate([
    {"$match": {"signed_up_at":{ $gte: signupLowerBoundary, $lte: signupUpperBoundary } } }
    

])


