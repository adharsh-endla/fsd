mongod

mongosh

use fsd

show dbs

use testDB
db.dropDatabase()

use mystudent
db.createCollection("student_details")

show collections

db.student_details.drop()

db.student.insertOne({shivani:100})

db.createCollection("empDetails")

db.empDetails.insertMany([
{
First_Name:"Radhika",
Last_Name:"Sharma",
Date_Of_Birth:"1995-09-26",
e_mail:"radhika_sharma.123@gmail.com",
phone:"9000012345"
},
{
First_Name:"Rachel",
Last_Name:"Christopher",
Date_Of_Birth:"1990-02-16",
e_mail:"Rachel_Christopher.123@gmail.com",
phone:"9000054321"
},
{
First_Name:"Fathima",
Last_Name:"Sheik",
Date_Of_Birth:"1990-02-16",
e_mail:"Fathima_Sheik.123@gmail.com",
phone:"9000054321"
}
])

db.allstudents.remove({First_Name:"Fathima"})

db.student_details.updateOne(
{ name:"xyz" },
{ $set:{ age:0 } }
)
