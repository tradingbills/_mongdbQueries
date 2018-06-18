db.companies.aggregate([{
  '$match': {
    'name': 'Viacom'
  }
}, {
  '$project': {
    _id: 1,
    'TotalOfAcquistions': {
      $sum: '$acquisitions.price_amount'
    }
  }
}]).pretty()


// General for all companies Acquistions sorted in descending
db.companies.aggregate([{
  '$project': {
    _id: 1,
    "Name": "$name",
    'TotalOfAcquisitions': {
      $sum: '$acquisitions.price_amount'
    }
  }
}, {
  "$sort": {
    "TotalOfAcquisitions": -1
  }
}]).pretty()