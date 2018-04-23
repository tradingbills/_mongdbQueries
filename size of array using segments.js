db.getCollection('segments').aggregate([
 {"$project": { 
     "_id": 0,
     "Count of Segments": {            
         "$size": "$segments.name"
      }
   }
 }
])