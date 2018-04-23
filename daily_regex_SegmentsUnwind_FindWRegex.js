/* free users query*/
db.intercomSegments.aggregate([
  { $unwind: "$segments"},
  { $match:{ "segments.name":{ $regex : /^free clients/, '$options' : 'i' } } } 
  ,{ $project: { "_id": 0, "segments.name": 1, "segments.id": 1 }}
 ]) 