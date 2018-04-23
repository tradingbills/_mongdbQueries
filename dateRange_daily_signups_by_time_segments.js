db.getCollection('intercomUsers20171101')
.find(
{$and :[{"signed_up_at":
      { $gt: 1509494400} },{"signed_up_at":{ $lt: 1509523200}}
]})
.count()
