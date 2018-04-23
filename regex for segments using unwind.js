db.getCollection('segments').aggregate([
  {
    "$unwind": "$segments"
  }, 
  {
    "$match": {
      "segments.name": {
        $regex: /free/,
        '$options': 'i'
      }
    }
  }, 
  {
    "$project": {
      "_id": 0,
      "segments.name": 1,
      "segments.id": 1
    }
  }
])