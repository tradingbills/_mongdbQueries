db.getCollection('testUserUnwind')
.aggregate([
  { $match: {'addresses.city': 'Boston'} }
  , { $unwind: '$addresses' }
  , { $match: {'addresses.city': 'Boston'} }
  , { $group: {         '_id': null
        , 'content': {$addToSet: '$addresses' }
        , 'count' : {"$sum":1}
      }
    }
])  