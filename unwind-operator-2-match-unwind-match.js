/* 1 below is the first set of aggregate stages to filter on 'Boston' for the DB
   unwind the address array and then filter again on 'Boston'
   2 then takes the result and puts the unique values in an 'content' array 
*/
db.getCollection('testUserUnwind')
.aggregate(
/* 1 */
    { $match: {'addresses.city': 'Boston'} }
    ,{ $unwind: '$addresses' }
    ,{ $match: {'addresses.city': 'Boston'} }
/* 2 */
    ,{ $group: {'_id': null, 'content': {$addToSet: '$addresses' }}}
)  