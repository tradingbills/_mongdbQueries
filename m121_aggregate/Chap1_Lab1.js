/*
  Connect: 
    mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/aggregations?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl -u m121 -p aggregations --norc
  Use Collection:
    videos
  Review Document schema:
    db.movies.findOne()
    files saved locally as m121_Lab1_findOne-movieModel.js
  Create Query:
    imdb.rating is at least 7
    genres does not contain "Crime" or "Horror"
    rated is either "PG" or "G"
    languages contains "English" and "Japanese"
    
    comparison query operators
    $in: https://docs.mongodb.com/manual/reference/operator/query/in/
    $nin: https://docs.mongodb.com/manual/reference/operator/query/nin/index.html#op._S_nin
*/
var pipeline = [{
  $match: {
    "imdb.rating": {
      $gte: 7
    },
    rated: {
      $in: ["PG", "G"]
    },
    genres: {
      $nin: ["Horror", "Crime"]
    },
    languages: {
      $all: ["Japanese", "English"]
    }
  }
}];

// db.movies.aggregate(pipeline).itcount()
// see handouts to unzip and get 'validateLab1.js', open cluster connection from where this js file is to load it
//load('validateLab1.js')
//validateLab1(pipeline)