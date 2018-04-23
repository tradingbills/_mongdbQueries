/* find by regex statement*/
db.segments.aggregate([
  { $unwind: "$segments"},
  { $match:{ "segments.name":{ $regex : /^no/, '$options' : 'i' } } } 
  ,{ $project: { "_id": 0, "segments.name": 1, "segments.id": 1 }}
 ]) 