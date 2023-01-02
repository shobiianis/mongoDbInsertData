const dbConnect = require("./mongodb.js");


const insert = async () => {
    // const db=dbConnect();  As its a promise so for this we have to use await and for this function must be async
    const db = await dbConnect();
    // console.log(db) Here we got our database 

    const result = db.insertOne([

        {
            "name": "iphone7",
            "ram": "8gb",
            "price": 50000
        },
        {
            "name": "somsong",
            "ram": "8gb",
            "price": 50000
        },
        {
            "name": "itel",
            "ram": "8gb",
            "price": 50000
        }


    ])

}


insert();