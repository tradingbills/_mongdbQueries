var emails= [ {"custom_attributes.lmc_email":{$regex: /gmail.com$/ } }
    ,{"custom_attributes.lmc_email":{$regex: /hotmail.com/} }
    ,{"custom_attributes.lmc_email":{$regex: /yahoo.com/} } ]

db.getCollection('20180419').aggregate([
    { $match: {"$or":emails} }, 
    { $group: {_id: null, "total": {$sum:1} }} ])