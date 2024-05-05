db.collection.find() //-Fetch all document
db.collection.find({attribute:value})  // Particular data

//in operator
db.inventory.find({name:{$in:["vishnu"]}})

//AND
db.inventory.find({name:"vishnu",age:{$lt:30}})

//OR
db.inventory.find(
    {$or :
        [
        {name:"Akshata"},
        {qty:{$lt:30}
        }
       ]
    }
    )

//find one
db.collection.findOne()

//limit
db.inventory.find().limit(n)

//skip
db.inventory.find().skip(n)

//sort
db.inventory.find().sort(attr:1)
// 1- increasing
// -1 - decreasing

