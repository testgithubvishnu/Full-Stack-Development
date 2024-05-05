//Insert single record
db.collection_name.insertOne({name:"vishnu",age:45,id:56,city:"latur"})

//insert multiple records
db.collection_name.insertMany([
    {name:"vishnu",age:45,id:56,city:"latur"},
    {name:"vina",age:45,id:56,city:"latur"},
    {name:"vinit",age:45,id:56,city:"latur"}
])
