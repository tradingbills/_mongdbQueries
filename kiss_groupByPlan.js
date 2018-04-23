db.getCollection('19618').aggregate([

  {$match:{clientid: {$eq: null} }}, //or $ne:null for clients
  {$group:{_id:"$_n",count:{"$sum":1}}}
])
