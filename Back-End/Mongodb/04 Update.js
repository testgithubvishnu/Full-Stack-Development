db.inventory.updateOne(
    {name:"vina"},
    { $set:
        {age:67,id:2294,city:"latur"
        },
        $currentDate:{lastModified:true}
    }
)
