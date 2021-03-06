var lowerBoundary=parseInt(1509692401)
var upperBoundary=parseInt(1510300799);
// Range: lowerBoundary=2017-11-02, 12:00:01 am - TO - upperBoundary=2017-11-02, 11:59:59 pm;
// https://docs.mongodb.com/manual/reference/method/cursor.forEach/

for (var i = 0; i <1;i ++) {
// db.users.find().forEach( function(myDoc) { print( "user: " + myDoc.name ); } );
print("user, email, site region, plan id,plan level");
  db.getCollection('intercomUsers20171109').find({
      $and: [
        {"signed_up_at": { $gt: lowerBoundary }}, 
        {"signed_up_at": { $lt: upperBoundary }}
      ]
  }
  
  )
  .forEach(function(myDoc) {
      print(myDoc.name + ',' + myDoc.email + ',' + myDoc.custom_attributes.site_region + ',' + myDoc.custom_attributes.plan_id + ',' + myDoc.custom_attributes.plan_level);
  })
  print("----------------------------------");
// .count()
}