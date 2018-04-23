// print('Signup + websessions today')

/* Collection used */
var collName= 20180131 
/* Date range is 2018-01-31 00:00:00 -to- 2018-01-31 23:59:59 */
var dateRange= {"$gte":1517385600,"$lte":1517471999}
/* ------Query------------*/
var query= {"signed_up_at":{"$gte":1517385600,"$lte":1517471999}}
/*-----------------------*/

            
db.getCollection(`${collName}`).find().count()