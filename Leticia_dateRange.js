
// print('last_seen')

/* Collection used */
var collName= 20180131
/* Date range is 2018-01-24 00:00:00 -to- 2018-01-31 23:59:59 */
var dateRange= {"$gte":1514764800,"$lte":1517443199}
var freePlans= {"paid_id":{"$ne":244}} 
/* ------Query------------*/
var query= {"last_request_at":{"$gte":1514764800,"$lte":1517443199}} 
/*-----------------------*/

            
db.getCollection(`${collName}`).find(query).count()