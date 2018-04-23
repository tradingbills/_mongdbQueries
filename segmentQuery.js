db.getCollection('intercomUsers').find(
{
"segments" : {$exists: true},
"segments.segments.id": "5626c936636fc0307300006b"
}
)