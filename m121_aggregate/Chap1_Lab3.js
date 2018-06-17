/*
  Connect: 
    mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/aggregations?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl -u m121 -p aggregations --norc
  Use Collection:
    videos
  Review Document schema:
    db.movies.findOne()
  Create Query using project:
    analyze movie collection to find movie titles that are composed of only one word
*/
var pipeline=[{$project:{_id:0,title:1,titleSize:{$size:{$split:["$title"," "]}}}},{$match:{titleSize:1}},{$project:{_id:0,title:1}}];

// db.movies.aggregate(pipeline).itcount()