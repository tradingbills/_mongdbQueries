db.getCollection('segments').aggregate([
  {$project: { "Count of Segments": { $size: "$segments.name"}}}
])