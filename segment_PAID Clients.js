// paid client segment count 
db.getCollection('intercomUsers20180118').find({
      "segments.segments.id":"59deb60085a3c22795133b02"
    }).count()