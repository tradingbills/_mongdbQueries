/* map reduce
*/      
var mapFunc = function(){
    this.students.forEach(function(student){
      emit(student.fName + " " + student.lName,1)
    });
}
//(student,value) ~ (key,values) emitted from map
var reduceFunc = function(student, values){
    var totalCount = 0;
    values.forEach(function(value){
        totalCount++
    });
    return {
        count: totalCount
}
};
db.getCollection('classes').mapReduce(
  mapFunc,
  reduceFunc,
  { out: "map_ex" }
 )