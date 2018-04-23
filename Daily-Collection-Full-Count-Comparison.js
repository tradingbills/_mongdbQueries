var lowerBoundary=1509778801;
var upperBoundary=1509865199;
// Range: lowerBoundary=2017-11-04, 12:00:01 am - TO - upperBoundary=2017-11-04, 11:59:59 pm;

for(x=1;x<5;x++){
    useCollection = `intercomUsers2017110${x}`
print(useCollection);
print(db.getCollection(useCollection).find({}).count())
}