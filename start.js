// if (undefined){
// console.log("hello")
// }else{
// console.log("hi")
// }

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,4));


// sum = ((a,b)=>{
// return `the sum of two number is ${a } + ${b } = ${a +b }`
// });
// console.log(sum(5,4));



//  var sumExp = function(a,b){
//   return  a+b;
// }
//  var sum = sumExp(35,40);



//var myFriends = ['ayub','rohit','virat','rahul'];


// for(let elements of myFriends){
//     console.log(elements);
// }

// myFriends.forEach(function(element,index,array){
// console.log(element + " index of : " +index + "     array ; "+ array) ;
// });



// const prices = [100,200,300,350,399,500,700];

// const priceTag = prices.filter((elements,index)=>{
// return elements < 400;
// });

// console.log(priceTag);



// const animals = ['cow','goat','buffalo'];
// //animals.pop('chiken','dog');

// console.log(animals.shift());
// console.log(animals);


//const months = ['jan', 'feb','mar','april','may'];

// const addmonths = months.splice(months.length,0,'june');

// console.log(months);
// console.log(addmonths);



//  const months = ['jan', 'feb','mar','april','may'];
//  months.unshift('january');
//  console.log(months);

// const check = months.includes('mar');

// console.log(check); 


// const position = months.indexOf('mar');
// console.log(position);

// if (position != -1 ) {
//     const updatemonths = months.splice(position,1);
//     console.log(months);
// } else {
//     console.log('plz check it once')
// }


// const updatemonths = months.splice




// let num = [1,4,9,16,25,36,49,64]

// let squareroot = num.map((elem,index,Array)=>{
//     return (elem ** (1/2))
// })
// console.log(squareroot);


// let mult = squareroot.map((elements,index,array)=>{
//     return elements*2
// }).filter((currElem,index,array)=>{
//     return currElem > 10;
// }).reduce((accumulator,currElem,index,array)=>{
//     return accumulator += currElem ;

//  },58)
// console.log(mult);





// reducing 2d into 1d array

// const arr = [

// [`zone1`,`zone2`],
// [`zone3`,`zone4`],
// [`zone5`,`zone6`],
// [`zone7`,`zone8`],

// ]

// const red_array = arr.reduce((accumulator,currentval,index,array)=>{
//     return accumulator.concat(currentval)
// })
// //console.log(arr);
// console.log(red_array);




//string



// fruits = "apple, banana, grapesa"    

// //let temp = fruits.replace(`banana` , `orange`)

// //console.log(fruits.charCodeAt(0));

// let lastString = fruits.length-1;
// console.log(fruits.charCodeAt(lastString));




//const greet = "good MOrning"

// console.log(greet[5]);

// console.log(greet.toLowerCase());
// console.log(greet.toUpperCase());




// const fname = "rohit"
// const lname = "sharma"

// console.log(fname.concat(" ",lname));



// const str = "    hello world  "
// console.log(str.trim());




// const str = "apple,ball,cat"
// console.log(str.split(","));



//dates and time 

//  let date = new Date(2022,08,06,11,30,15,0);               9/6/2022, 11:30:15
//  console.log(date.toLocaleString()); 


// console.log(new Date());                               2022-06-14T12:11:57.769Z         

// console.log(new Date().toLocaleString());              6/14/2022, 17:41:57

// console.log(new Date().toString());                    Tue Jun 14 2022 17:41:57 GMT+0530 (India Standard Time)


//console.log(Date.now());                                  1655208979369

//const curd = new Date()

// console.log(curd.toLocaleString());
//console.log(curd.setFullYear(2015));
// console.log(curd.getMonth());
// console.log(curd.getUTCDate());
// console.log(curd.getUTCDay());


// const timex = new Date()

// console.log(timex.getHours());
// console.log(timex.getMinutes());
// console.log(timex.getSeconds());
// console.log(timex.getMilliseconds());
// console.log(timex.getTime());


//console.log(Math.round(4.5));



//objects

// const students = {
//     name : "ayub",
//     age  : 23,
//     profession : "engineer"

//  }    
 //  delete students.profession;

//console.log(students);
//json

// var in_json = JSON.stringify(students);

// console.log(in_json);



//  NODE JS
//const fs = require("fs");

//fs.writeFileSync("train.txt","welcome")
//fs.appendFileSync("train.txt","  to my node js");

// const bucket = fs.readFile("train.txt","UTF-8",(err,data)=>{
//     console.log(data);
// });

//fs.renameSync("train.txt","ayub.txt");   



//os


//const os = require ("os")     

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.version());

// const mem = os.totalmem()
// console.log((mem/1024/1024/1024));

// const mem = os.freemem()
// console.log((mem/1024/1024/1024));




//exports
// const add = ((a,b)=>{
//     return a+b;
// })

// const sub = ((a,b)=>{
//     return a-b;
// })
// module.exports.add = add;
// module.exports.sub = sub;

// const chalk = require("chalk");

// console.log(chalk.blue("true"));


// const validator = require("validator");

// const res = validator.isEmail("ayub@123.com");
// console.log(res)



//server 

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req,res)=>{
// //console.log(req.url);
// if (req.url == "/") {
//     res.end("hi ayub");
// } else if(req.url == "/api"){
// fs.readFile("./dummy.json","utf-8",(err,data)=>{
//     const original=JSON.parse(data);
//     console.log(original[1].name);
// });
// } else if(req.url == "/cricket"){
//     res.end("welcome to cricket")
// }else {
//     res.end("404 error,page not found")
// }
// });


// server.listen(3000,()=>{
//     console.log("running ");
// });




// 20    21     22 after wards



// events 

// const EventEmitter = require("events")

// const events = new EventEmitter();

// events.on("myname",()=>{
//     console.log("ayub");
// });

// events.on("myname",()=>{
//     console.log("tom");
// });


// events.on("myname",()=>{
//     console.log("jack");
// });


// events.emit("myname");










const express = require("express");
const app = express()

const multer = require('multer');
//const uploads=multer();
const path = require('path');

const bodyParser = require("body-parser")

const { Sequelize, DataTypes, Op } = require("sequelize");
const { urlencoded } = require("body-parser");

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const sequelize = new Sequelize('project', 'root', 'Ayub@123', {
    dialect: "mysql",
});
sequelize.authenticate().then(() => {
    console.log("connection is established");
}).catch((err) => {
    console.log("this has an error");
});
const cors=require("cors");
const console = require("console");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const Airport_Details = sequelize.define(
    "Airport_Details",
    {
        code: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, lat: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, lon: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, name: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, city: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, state: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, country: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, woeid: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, tz: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, phone: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        },type: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, email: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, url: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, runway_length: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, elev: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, icao: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, direct_flights: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: false
        }, carriers: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: false
        }

    }, { tableName: "Airport_Details" }
);
Airport_Details.sync({ force: false});

app.listen(port, () => {
    console.log(`running on the port :${port}`);
})

app.get("/products",async (req, res) => {
    const alldata = await Airport_Details.findAll()
    res.json(alldata);
});

// app.get("/products/:id",async(req,res)=>{
//     console.log(req.params.id );
//     const data = await product_catalogue.findOne({
//         where : 
//         {id :req.params.id }
//     });
//     res.json(data);
// console.log(data);
// });

app.post("/products", async (req, res) => {
console.log("req.body",req.body.length)
let i=0,j=1;
    while(i<req.body.length){
        
    let code = req.body[i].code;
    let lat = req.body[i].lat;
    let lon = req.body[i].lon;
    let name = req.body[i].name;
    let city = req.body[i].city;
    let state = req.body[i].state;
    let country= req.body[i].country;
    let woeid = req.body[i].woeid;
    let tz = req.body[i].tz;
    let phone = req.body[i].phone;
    let type = req.body[i].type;
    let email = req.body[i].email;
    let url= req.body[i].url;
    let runway_length = req.body[i].runway_length;
    let elev = req.body[i].elev;
    let icao = req.body[i].icao;
    let direct_flights = req.body[i].direct_flights;
    let carriers = req.body[i].carriers
   console.log("hit",i)
    const save_Airport_Details = Airport_Details.build({
        code,lat,lon,name,city,state,country,woeid,tz,phone,type,email,url,runway_length,elev,icao,direct_flights,carriers,
        
    })

    await save_Airport_Details.save()
    
    i++;
    j*=1;
   
 console.log(save_Airport_Details,"Airport_Details");
}
 if(j==1){
     res.send({
         return_code:0,
         message:"Added Sucessfully"
     }
     )
 }

});

const Datings = sequelize.define(
    "Datings",
    {
        UserName: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, Password: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        },Age: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, Address: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, Gender: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }, Image:{
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false
        }
    } , { tableName: "Datings" }
    );
    Datings.sync({ force: false}); 

   

    app.get("/Datings/male",async (req, res) => {
        const alldata = await Datings.findAll({
            where:{Gender:"male"}
        })
        res.json(alldata);
    });
    app.get("/Datings/female",async (req, res) => {
        const alldata = await Datings.findAll({
            where:{Gender:"female"}
        })
        res.json(alldata);
    });

    const Storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './image')
        },
        filename: function (req, file, cb) {
          cb(null,file.fieldname+_+Date.now() + path.extname(file.originalname))
        }
      });
      
     // const uploads = multer({ storage: Storage });
     const uploads= multer({
        storage: Storage,
        limits: {
          fileSize: 1000000 // 1000000 Bytes = 1 MB
        },
        fileFilter(req, file, cb) {
          if (!file.originalname.match(/\.(png|jpg)$/)) { 
             // upload only png and jpg format
             return cb(new Error('Please upload a Image'))
           }
         cb(undefined, true)
      }
  }) 




console.log("Storage",Storage);

    app.post("/Datings",uploads.single("Storage") ,async (req, res) => {
        console.log("req.file",req.body);

        let UserName = req.body.UserName;
        let Password = req.body.Password;
        let Age = req.body.Age;
        let Address= req.body.Address;
        let Gender= req.body.Gender;
        let Image = req.body.image
      const save_Datings=Datings.build({
          UserName,Password,Age,Address,Gender,Image,
          

      })  
      console.log("save_Datings",save_Datings);

      await save_Datings.save()
      res.send({
        return_code:0,
        message:"Added Sucessfully"
    });

    
   });

// app.put("/products/:id",async (req,res)=>{
//     const updateProducts = await product_catalogue.update(req.body,{
//         where:{id:req.params.id}
//     });
//     res.json("products_updated");
// });

// app.delete("/products/:id",async (req,res)=>{
//     const deleteProducts = await product_catalogue.destroy({
//         where:{id:req.params.id}
//     });
//     res.json("products_deleted");
// });



// //console.log("my \"name\" is khan")


app.post("/Datings/signin", async (req, res) => {
    const { UserName, Password } = req.body
    console.log("req.body",req.body)
    try {
        if (!UserName || !Password) {
            return res.status(422).json({ error: "plz filled  all the fields!!!" })
        }
        
        const userExists = await Datings.findOne({where:{UserName:req.body.UserName}})
        console.log("userExists",userExists);
        if (userExists) {
            const options = {
                 Password:userExists.Password 
            };
            console.log(options.Password,"letsee");
            console.log(Password,"Password");

            const isMatch = await Datings.findOne({where:{Password:req.body.Password}})
            console.log("isMatch",isMatch);
            if (isMatch) {
                res.status(200).json({ message: "SignIn succesfull" })
            } else {
                res.status(400).json({ message: "Invalid Credentials to you" })
            }

        } else {
            res.status(400).json({ message: "Invalid Credentials" })
        }


    } catch (error) {
        console.log(error);
    }
})



















































































































































































































































































