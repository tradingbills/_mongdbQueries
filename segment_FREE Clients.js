// free client segment count 
db.getCollection('intercomUsers20180118').find({
     "segments.segments.id":"59dfe40a0a5037ff1c0bd8af"
    }).count()