var collName= 20180420 
// 2018-04-19 00:00:00 to 
// 2018-04-19 23:59:59
var dateRange= {"$gte":1524096000,"$lte":1524182399}
// -----------------------------------------------------
var queryDoc07= {}, paid= "59deb60085a3c22795133b02" 
queryDoc07.signed_up_at= dateRange
queryDoc07["segments.segments.id"]= paid;
db.getCollection(`${collName}`).aggregate([{"$match": queryDoc07} ,{"$group": {"_id": null, "7: Sum signup + upgrade": {"$sum": 1}} }])