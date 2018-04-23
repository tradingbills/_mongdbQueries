/* This unwind and group is on a null value for the grouping
   and the reason its not on a $key for grouping is so we can
   just get the $sume
*/
db.getCollection('classes').aggregate([
  { $unwind:"$students"}
     ,{ $group: { '_id': 'Document Count after unwinding students array'
        ,'count' : {"$sum":1}
        }
    }
])