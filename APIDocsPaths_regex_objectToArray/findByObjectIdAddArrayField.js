var zenOrJira= []
db.getCollection('subset02').update({"_id" : ObjectId("5b2d17a95fc8779ec37a8d07")},{$set:{"zenOrJira":zenOrJira}})