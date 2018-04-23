db.getCollection('classes').aggregate([
  { $unwind:"$students"}
     ,{ $group: { '_id': 'Document Count after unwinding students array'
        ,'count' : {"$sum":1}
        }
    }
])