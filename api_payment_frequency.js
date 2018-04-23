db.getCollection('intercomUsers20180117')
.aggregate([
    {
      $group:{ _id : "$custom_attributes.api_payment_frequency",
                total:{$sum: 1}
             }
     }
])